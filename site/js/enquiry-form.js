/* ============================================================
   RIADA — Option 03 · enquiry-form.js
   A refined enquiry: underline-only fields, inline validation on
   blur, honeypot spam resistance, a slow pulsing-dot loading
   state, then a quiet success line. No real secrets, no storage —
   the submit is mocked and resolves to the success state (wire to
   Formspree / a serverless handler in production; validate
   server-side too).
   ============================================================ */

export function initEnquiryForm() {
  const form = document.querySelector('[data-enquiry]');
  if (!form) return;

  const statusEl = form.querySelector('[data-enquiry-status]');
  const submitBtn = form.querySelector('.enquiry__submit');
  const honeypot = form.querySelector('input[name="company_url"]');

  const validators = {
    name: v => v.trim().length >= 2 || 'Please share your full name.',
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'Please enter a valid email address.',
    interest: v => v.trim() !== '' || 'Please choose an area of interest.',
    message: v => v.trim().length >= 10 || 'A line or two about what you are weighing.',
  };

  const fieldFor = input => input.closest('.field');
  const errorFor = input => {
    const id = input.getAttribute('aria-describedby');
    return id ? form.querySelector('#' + id) : null;
  };

  const setError = (input, message) => {
    const field = fieldFor(input);
    const err = errorFor(input);
    if (message) {
      field?.setAttribute('data-error', '');
      field?.removeAttribute('data-valid');
      input.setAttribute('aria-invalid', 'true');
      if (err) { err.textContent = message; err.hidden = false; }
    } else {
      field?.removeAttribute('data-error');
      field?.setAttribute('data-valid', '');
      input.removeAttribute('aria-invalid');
      if (err) { err.textContent = ''; err.hidden = true; }
    }
  };

  const validateField = input => {
    const rule = validators[input.name];
    if (!rule) return true;
    const result = rule(input.value);
    setError(input, result === true ? '' : result);
    return result === true;
  };

  // Validate on blur (discreet, not while typing); clear error as they fix it.
  Object.keys(validators).forEach(name => {
    const input = form.elements[name];
    if (!input) return;
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (fieldFor(input)?.hasAttribute('data-error')) validateField(input);
    });
    input.addEventListener('change', () => validateField(input));
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();

    // Honeypot — silently succeed for bots, do nothing real.
    if (honeypot && honeypot.value.trim() !== '') {
      showStatus('success', 'Thank you. We will be in touch.');
      form.reset();
      return;
    }

    // Validate all; focus the first invalid.
    let firstInvalid = null;
    Object.keys(validators).forEach(name => {
      const input = form.elements[name];
      if (!input) return;
      const ok = validateField(input);
      if (!ok && !firstInvalid) firstInvalid = input;
    });

    if (firstInvalid) {
      firstInvalid.focus();
      showStatus('error', 'Please complete the highlighted fields.');
      return;
    }

    // Slow, elegant loading state (the pulsing coral dot).
    setBusy(true);
    if (statusEl) statusEl.hidden = true;

    try {
      await mockSubmit(new FormData(form));
      showStatus('success', 'Thank you. We will be in touch.');
      form.reset();
      form.querySelectorAll('.field').forEach(f => { f.removeAttribute('data-valid'); f.removeAttribute('data-error'); });
    } catch (err) {
      showStatus('error', 'Something interrupted the send. Please try again, or email hello@riada.sa.');
    } finally {
      setBusy(false);
    }
  });

  function setBusy(busy) {
    if (!submitBtn) return;
    submitBtn.setAttribute('aria-busy', String(busy));
    const label = submitBtn.querySelector('.btn__label');
    if (label) label.textContent = busy ? 'Sending…' : 'Send enquiry';
  }

  function showStatus(state, message) {
    if (!statusEl) return;
    statusEl.dataset.state = state;
    statusEl.textContent = message;
    statusEl.hidden = false;
  }

  // Mock network — resolves after a refined pause. Replace with a real
  // POST to your form endpoint / serverless handler in production.
  function mockSubmit() {
    return new Promise(resolve => setTimeout(resolve, 1400));
  }
}
