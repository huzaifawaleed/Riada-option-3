/* ============================================================
   RIADA — Option 03 · hero-three.js
   A SPARSE field of coral (and a few cream) dots drifting very
   slowly on the Pine gradient — motes in still air, not a
   particle demo. Near-still camera, ≤2° mouse parallax, capped
   DPR, RAF paused when the hero leaves the viewport.
   Dynamic-imported after first paint; CSS fallback covers no-WebGL.
   ============================================================ */

export async function initHero(canvas) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const THREE = await import('https://esm.sh/three@0.160.0');

  // Bail to the CSS fallback if WebGL is unavailable.
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch (e) { return; }
  if (!renderer) return;

  const hero = canvas.closest('.hero') || canvas.parentElement;
  let width = hero.clientWidth, height = hero.clientHeight;

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(width, height, false);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
  camera.position.z = 26;

  // Count scales down on small screens.
  const isMobile = width < 768;
  const COUNT = isMobile ? 46 : 120;

  const CORAL = new THREE.Color('#E2493B');
  const CREAM = new THREE.Color('#FBEFEA');

  const positions = new Float32Array(COUNT * 3);
  const colors = new Float32Array(COUNT * 3);
  const drift = new Float32Array(COUNT * 3);
  const baseAlpha = new Float32Array(COUNT);

  const spread = { x: 46, y: 30, z: 26 };
  for (let i = 0; i < COUNT; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * spread.x;
    positions[i * 3 + 1] = (Math.random() - 0.5) * spread.y;
    positions[i * 3 + 2] = (Math.random() - 0.5) * spread.z;

    // ~85% coral, ~15% cream — coral remains the accent.
    const c = Math.random() < 0.15 ? CREAM : CORAL;
    colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;

    // Very slow upward/diagonal drift.
    drift[i * 3]     = (Math.random() - 0.5) * 0.012;
    drift[i * 3 + 1] = 0.010 + Math.random() * 0.016;
    drift[i * 3 + 2] = (Math.random() - 0.5) * 0.008;

    baseAlpha[i] = 0.2 + Math.random() * 0.3; // 0.2–0.5
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Soft round sprite so dots read as motes, not squares.
  const sprite = makeDotTexture(THREE);
  const material = new THREE.PointsMaterial({
    size: isMobile ? 0.5 : 0.62,
    map: sprite,
    vertexColors: true,
    transparent: true,
    opacity: 0.42,
    depthWrite: false,
    blending: THREE.NormalBlending,
    sizeAttenuation: true,
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  // ≤2° mouse parallax — almost imperceptible.
  let targetRX = 0, targetRY = 0, rx = 0, ry = 0;
  const MAX = (2 * Math.PI) / 180;
  window.addEventListener('mousemove', e => {
    targetRY = ((e.clientX / window.innerWidth) - 0.5) * 2 * MAX;
    targetRX = ((e.clientY / window.innerHeight) - 0.5) * 2 * MAX;
  }, { passive: true });

  // Pause RAF when hero off-screen.
  let running = true;
  const io = new IntersectionObserver(([entry]) => {
    running = entry.isIntersecting;
    if (running) loop();
  }, { threshold: 0 });
  io.observe(hero);

  function onResize() {
    width = hero.clientWidth; height = hero.clientHeight;
    renderer.setSize(width, height, false);
    camera.aspect = width / height; camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', onResize, { passive: true });

  const pos = geometry.attributes.position.array;
  let raf = 0;
  function loop() {
    if (!running) { cancelAnimationFrame(raf); return; }
    for (let i = 0; i < COUNT; i++) {
      pos[i * 3]     += drift[i * 3];
      pos[i * 3 + 1] += drift[i * 3 + 1];
      pos[i * 3 + 2] += drift[i * 3 + 2];
      // Wrap gently when a mote drifts past the top.
      if (pos[i * 3 + 1] > spread.y / 2)  pos[i * 3 + 1] = -spread.y / 2;
      if (pos[i * 3]     >  spread.x / 2) pos[i * 3]     = -spread.x / 2;
      if (pos[i * 3]     < -spread.x / 2) pos[i * 3]     =  spread.x / 2;
    }
    geometry.attributes.position.needsUpdate = true;

    ry += (targetRY - ry) * 0.04;
    rx += (targetRX - rx) * 0.04;
    points.rotation.y = ry;
    points.rotation.x = rx;
    points.rotation.z += 0.0004; // a barely-there turn

    renderer.render(scene, camera);
    raf = requestAnimationFrame(loop);
  }

  // WebGL is live — let CSS fade out the static fallback.
  document.documentElement.classList.add('webgl-on');
  loop();
}

function makeDotTexture(THREE) {
  const size = 64;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.5, 'rgba(255,255,255,0.85)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.fill();
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}
