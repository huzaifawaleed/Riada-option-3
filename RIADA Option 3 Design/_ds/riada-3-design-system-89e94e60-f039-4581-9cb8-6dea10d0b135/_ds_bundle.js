/* @ds-bundle: {"format":3,"namespace":"RIADADesignSystem_89e94e","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardBody","sourcePath":"components/core/Card.jsx"},{"name":"CardFooter","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"b977c15499cf","components/core/Button.jsx":"e839c4740e1a","components/core/Card.jsx":"c7493b620275","components/core/Eyebrow.jsx":"be497323b014","components/core/Input.jsx":"f6def0f1e3fa","ui_kits/website/Approach.jsx":"663a8e1bd827","ui_kits/website/Contact.jsx":"f11e54ebdba4","ui_kits/website/Footer.jsx":"129cf88cc5fd","ui_kits/website/Header.jsx":"64328552f32b","ui_kits/website/Hero.jsx":"e77ab097605c","ui_kits/website/Practice.jsx":"3ed0b4547817","ui_kits/website/Report.jsx":"16dd42393f83"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RIADADesignSystem_89e94e = window.RIADADesignSystem_89e94e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.riada-badge{
  display:inline-flex; align-items:center; gap:6px;
  font-family:var(--font-sans); font-weight:var(--fw-bold);
  font-size:11px; letter-spacing:.08em; text-transform:uppercase;
  padding:4px 10px; border-radius:var(--radius-pill); line-height:1;
  border:1px solid transparent;
}
.riada-badge__dot{ width:6px; height:6px; border-radius:50%; background:currentColor; opacity:.9; }
.riada-badge--coral{ background:var(--riada-coral-50); color:var(--riada-coral-deep); }
.riada-badge--teal{ background:var(--riada-teal-50); color:var(--riada-teal); }
.riada-badge--neutral{ background:#F1ECE8; color:#6B5E57; }
.riada-badge--success{ background:#E3F0EC; color:var(--status-success); }
.riada-badge--warning{ background:#F7EBD7; color:var(--status-warning); }
.riada-badge--solid{ background:var(--riada-coral); color:#fff; }
.riada-badge--outline{ background:transparent; color:var(--riada-teal); border-color:var(--border-strong); }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('riada-badge-css')) return;
  const el = document.createElement('style');
  el.id = 'riada-badge-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Badge({
  children,
  tone = 'coral',
  dot = false,
  className = '',
  ...rest
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['riada-badge', `riada-badge--${tone}`, className].filter(Boolean).join(' ')
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "riada-badge__dot"
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject component CSS once (hover/press/glow pseudo-states that
   inline styles can't express). */
const CSS = `
.riada-btn{
  --_bg: var(--action-primary);
  position:relative; display:inline-flex; align-items:center; justify-content:center;
  gap:10px; font-family:var(--font-sans); font-weight:var(--fw-bold);
  letter-spacing:.02em; line-height:1; white-space:nowrap; cursor:pointer;
  border:1px solid transparent; border-radius:var(--radius-md);
  text-decoration:none; isolation:isolate;
  transition: transform var(--dur-fast) var(--ease-out),
              box-shadow var(--dur-base) var(--ease-out),
              background var(--dur-base) var(--ease-out),
              color var(--dur-base) var(--ease-out),
              border-color var(--dur-base) var(--ease-out);
}
.riada-btn:focus-visible{ outline:none; box-shadow:0 0 0 3px var(--focus-ring); }
.riada-btn[disabled]{ cursor:not-allowed; opacity:.45; box-shadow:none; transform:none; }

/* sizes */
.riada-btn--sm{ height:38px; padding:0 16px; font-size:13px; }
.riada-btn--md{ height:46px; padding:0 22px; font-size:14px; }
.riada-btn--lg{ height:54px; padding:0 30px; font-size:15px; }

/* PRIMARY — coral with the signature glow */
.riada-btn--primary{ background:var(--action-primary); color:var(--action-on-primary); box-shadow:var(--glow-coral); }
.riada-btn--primary::before{
  content:""; position:absolute; inset:-2px; z-index:-1; border-radius:inherit;
  background:var(--action-primary); filter:blur(16px); opacity:.45;
  transition:opacity var(--dur-base) var(--ease-out);
}
.riada-btn--primary:hover:not([disabled]){ background:var(--action-primary-hover); box-shadow:var(--glow-coral-strong); transform:translateY(-1px); }
.riada-btn--primary:hover:not([disabled])::before{ opacity:.7; }
.riada-btn--primary:active:not([disabled]){ background:var(--action-primary-press); box-shadow:var(--glow-coral-soft); transform:translateY(0); }

/* SECONDARY — teal outline */
.riada-btn--secondary{ background:transparent; color:var(--action-secondary-fg); border-color:var(--action-secondary-bd); }
.riada-btn--secondary:hover:not([disabled]){ background:var(--riada-teal); color:#fff; transform:translateY(-1px); }
.riada-btn--secondary:active:not([disabled]){ background:var(--riada-teal-700); transform:translateY(0); }

/* GHOST — quiet text action */
.riada-btn--ghost{ background:transparent; color:var(--action-secondary-fg); }
.riada-btn--ghost:hover:not([disabled]){ background:rgba(23,64,62,.07); }
.riada-btn--ghost:active:not([disabled]){ background:rgba(23,64,62,.12); }

/* ON-DARK variants */
.riada-btn--onDark.riada-btn--secondary{ color:#fff; border-color:var(--border-on-dark); }
.riada-btn--onDark.riada-btn--secondary:hover:not([disabled]){ background:#fff; color:var(--riada-teal); border-color:#fff; }
.riada-btn--onDark.riada-btn--ghost{ color:var(--riada-cream); }
.riada-btn--onDark.riada-btn--ghost:hover:not([disabled]){ background:rgba(255,255,255,.10); }

.riada-btn__icon{ display:inline-flex; align-items:center; }
.riada-btn--block{ width:100%; }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('riada-btn-css')) return;
  const el = document.createElement('style');
  el.id = 'riada-btn-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  onDark = false,
  block = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  className = '',
  ...rest
}) {
  ensureStyles();
  const Tag = as;
  const cls = ['riada-btn', `riada-btn--${variant}`, `riada-btn--${size}`, onDark ? 'riada-btn--onDark' : '', block ? 'riada-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    className: "riada-btn__icon"
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "riada-btn__icon"
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.riada-card{
  position:relative; display:flex; flex-direction:column;
  background:var(--surface-card); border:1px solid var(--border-hair);
  border-radius:var(--radius-card); padding:28px;
  transition: box-shadow var(--dur-base) var(--ease-out),
              transform var(--dur-base) var(--ease-out),
              border-color var(--dur-base) var(--ease-out);
}
.riada-card--shadow{ box-shadow:var(--shadow-md); border-color:transparent; }
.riada-card--cream{ background:var(--surface-card-warm); }
.riada-card--pine{ background:var(--riada-teal); border-color:var(--border-on-dark); color:var(--text-on-dark); }
.riada-card--interactive{ cursor:pointer; }
.riada-card--interactive:hover{ transform:translateY(-3px); box-shadow:var(--shadow-lg); border-color:transparent; }

/* Top coral rule accent */
.riada-card--accent::before{
  content:""; position:absolute; top:0; left:28px; width:40px; height:3px;
  background:var(--riada-coral); border-radius:0 0 3px 3px;
}
.riada-card__index{
  font-family:var(--font-serif); font-weight:var(--fw-light);
  font-size:13px; letter-spacing:.18em; color:var(--text-accent); margin-bottom:18px;
}
.riada-card__title{
  font-family:var(--font-serif); font-weight:var(--fw-medium);
  font-size:24px; line-height:1.2; letter-spacing:-.01em;
  color:var(--text-strong); margin:0 0 10px;
}
.riada-card--pine .riada-card__title{ color:#fff; }
.riada-card__body{
  font-family:var(--font-sans); font-weight:var(--fw-regular);
  font-size:15px; line-height:1.62; color:var(--text-muted); margin:0;
}
.riada-card--pine .riada-card__body{ color:var(--text-on-dark-muted); }
.riada-card__foot{ margin-top:auto; padding-top:20px; }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('riada-card-css')) return;
  const el = document.createElement('style');
  el.id = 'riada-card-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Card({
  children,
  surface = 'white',
  // white | cream | pine
  elevated = false,
  accent = false,
  // top coral rule
  interactive = false,
  index = null,
  // e.g. "01"
  title = null,
  className = '',
  ...rest
}) {
  ensureStyles();
  const cls = ['riada-card', surface === 'cream' ? 'riada-card--cream' : surface === 'pine' ? 'riada-card--pine' : '', elevated ? 'riada-card--shadow' : '', accent ? 'riada-card--accent' : '', interactive ? 'riada-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), index ? /*#__PURE__*/React.createElement("div", {
    className: "riada-card__index"
  }, index) : null, title ? /*#__PURE__*/React.createElement("h3", {
    className: "riada-card__title"
  }, title) : null, children);
}
function CardBody({
  children,
  className = '',
  ...rest
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("p", _extends({
    className: ['riada-card__body', className].filter(Boolean).join(' ')
  }, rest), children);
}
function CardFooter({
  children,
  className = '',
  ...rest
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['riada-card__foot', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Card, CardBody, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.riada-eyebrow{
  display:inline-flex; align-items:center; gap:10px;
  font-family:var(--font-sans); font-weight:var(--fw-bold);
  font-size:11px; letter-spacing:.28em; text-transform:uppercase;
  color:var(--text-accent);
}
.riada-eyebrow__line{ width:24px; height:2px; background:var(--riada-coral); border-radius:2px; }
.riada-eyebrow--onDark{ color:var(--riada-blush); }
.riada-eyebrow--muted{ color:var(--text-faint); }
.riada-eyebrow--muted .riada-eyebrow__line{ background:var(--text-faint); }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('riada-eyebrow-css')) return;
  const el = document.createElement('style');
  el.id = 'riada-eyebrow-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Eyebrow({
  children,
  rule = true,
  tone = 'accent',
  className = '',
  ...rest
}) {
  ensureStyles();
  const mod = tone === 'onDark' ? 'riada-eyebrow--onDark' : tone === 'muted' ? 'riada-eyebrow--muted' : '';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['riada-eyebrow', mod, className].filter(Boolean).join(' ')
  }, rest), rule ? /*#__PURE__*/React.createElement("span", {
    className: "riada-eyebrow__line"
  }) : null, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.riada-field{ display:flex; flex-direction:column; gap:7px; font-family:var(--font-sans); }
.riada-field__label{
  font-size:12px; font-weight:var(--fw-bold); letter-spacing:.1em;
  text-transform:uppercase; color:var(--text-strong);
}
.riada-field__label .req{ color:var(--riada-coral); margin-left:3px; }
.riada-input{
  font-family:var(--font-sans); font-size:15px; color:var(--text-body);
  background:var(--surface-card); border:1px solid var(--border-strong);
  border-radius:var(--radius-sm); padding:0 14px; height:48px; width:100%;
  transition:border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.riada-input::placeholder{ color:var(--text-faint); }
.riada-input:hover{ border-color:var(--riada-teal-400); }
.riada-input:focus{ outline:none; border-color:var(--riada-teal); box-shadow:0 0 0 3px rgba(23,64,62,.12); }
.riada-input--ta{ height:auto; padding:12px 14px; line-height:1.6; resize:vertical; min-height:112px; }
.riada-input--err{ border-color:var(--riada-coral); }
.riada-input--err:focus{ box-shadow:0 0 0 3px var(--focus-ring); }
.riada-field__hint{ font-size:12px; color:var(--text-faint); }
.riada-field__hint--err{ color:var(--riada-coral-deep); }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('riada-input-css')) return;
  const el = document.createElement('style');
  el.id = 'riada-input-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Input({
  label,
  hint,
  error,
  required = false,
  multiline = false,
  id,
  className = '',
  ...rest
}) {
  ensureStyles();
  const fieldId = id || (label ? 'f-' + String(label).toLowerCase().replace(/\s+/g, '-') : undefined);
  const Tag = multiline ? 'textarea' : 'input';
  const inputCls = ['riada-input', multiline ? 'riada-input--ta' : '', error ? 'riada-input--err' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "riada-field"
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "riada-field__label",
    htmlFor: fieldId
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*") : null) : null, /*#__PURE__*/React.createElement(Tag, _extends({
    id: fieldId,
    className: inputCls
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "riada-field__hint riada-field__hint--err"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "riada-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Approach.jsx
try { (() => {
// RIADA website — Approach / brand pillars
const PILLARS = [['Refined', 'Elegance over volume. We say less and mean more.'], ['Selective', 'Quality of engagement over quantity. Curated, high-value counsel.'], ['Precise', 'Considered, exact advice. Every word and figure carries weight.'], ['Pioneering', 'Forward-leaning leadership, aligned to the GCC growth agenda.']];
function Approach() {
  const {
    Eyebrow
  } = window.RIADADesignSystem_89e94e;
  return /*#__PURE__*/React.createElement("section", {
    id: "approach",
    className: "section section--paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The Approach"), /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, "Premium precision, in everything we deliver."), /*#__PURE__*/React.createElement("p", {
    className: "section__intro"
  }, "To be the most trusted advisory partner in the Gulf, where ambition meets disciplined execution. Four principles hold every engagement to that standard.")), /*#__PURE__*/React.createElement("div", {
    className: "pillars"
  }, PILLARS.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    className: "pillar",
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    className: "pillar__n"
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    className: "pillar__t"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "pillar__d"
  }, d))))));
}
window.Approach = Approach;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Approach.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
// RIADA website — Contact
function Contact() {
  const {
    Button,
    Input,
    Eyebrow
  } = window.RIADADesignSystem_89e94e;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "section section--cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container contact__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact__detail"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Contact"), /*#__PURE__*/React.createElement("h2", {
    className: "section__title",
    style: {
      marginBottom: 18
    }
  }, "Begin a conversation."), /*#__PURE__*/React.createElement("p", {
    className: "section__intro",
    style: {
      marginTop: 0
    }
  }, "Discretion and quality over noise. Tell us what you're weighing \u2014 we'll respond with a considered point of view.")), /*#__PURE__*/React.createElement("div", {
    className: "contact__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Headquarters"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "Riyadh, Kingdom of Saudi Arabia")), /*#__PURE__*/React.createElement("div", {
    className: "contact__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Enquiries"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "advisory@riada.sa")), /*#__PURE__*/React.createElement("div", {
    className: "contact__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Parent"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "A Fiduciam Global company"))), /*#__PURE__*/React.createElement("form", {
    className: "contact__form",
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    className: "contact__success"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--riada-coral)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", null, "Thank you. A RIADA advisor will be in touch within one business day.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, {
    label: "First name",
    placeholder: "First name",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Last name",
    placeholder: "Last name",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "full"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Organization",
    placeholder: "Company or entity"
  })), /*#__PURE__*/React.createElement("div", {
    className: "full"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    placeholder: "you@company.com",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "full"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "How can we help?",
    multiline: true,
    placeholder: "Briefly describe the decision you're facing."
  })), /*#__PURE__*/React.createElement("div", {
    className: "full",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit"
  }, "Send enquiry"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-faint)'
    }
  }, "Held in strict confidence."))))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// RIADA website — Footer
function Footer({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    className: "footer__logo",
    src: "../../assets/logos/riada3_reversed.svg",
    alt: "RIADA"
  }), /*#__PURE__*/React.createElement("p", {
    className: "footer__tag"
  }, "Pioneering leadership, refined to its essence. Strategic advisory for the GCC \u2014 a Fiduciam Global company.")), /*#__PURE__*/React.createElement("div", {
    className: "footer__col"
  }, /*#__PURE__*/React.createElement("h5", null, "Practice"), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('practice')
  }, "Strategy & Growth"), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('practice')
  }, "Government"), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('practice')
  }, "Risk & Compliance"), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('practice')
  }, "Corporate Finance")), /*#__PURE__*/React.createElement("div", {
    className: "footer__col"
  }, /*#__PURE__*/React.createElement("h5", null, "Firm"), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('approach')
  }, "The Approach"), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('report')
  }, "The RIADA Report"), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('contact')
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    className: "footer__col"
  }, /*#__PURE__*/React.createElement("h5", null, "Office"), /*#__PURE__*/React.createElement("a", null, "Riyadh, KSA"), /*#__PURE__*/React.createElement("a", null, "advisory@riada.sa"))), /*#__PURE__*/React.createElement("div", {
    className: "footer__base"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 RIADA. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Polished \xB7 Selective \xB7 Exact"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// RIADA website — Header / nav
function Header({
  onNav
}) {
  const {
    Button
  } = window.RIADADesignSystem_89e94e;
  const links = [['Practice Lines', 'practice'], ['Approach', 'approach'], ['The Report', 'report'], ['Contact', 'contact']];
  return /*#__PURE__*/React.createElement("header", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container nav__inner"
  }, /*#__PURE__*/React.createElement("img", {
    className: "nav__logo",
    src: "../../assets/logos/riada3_primary.svg",
    alt: "RIADA"
  }), /*#__PURE__*/React.createElement("nav", {
    className: "nav__links"
  }, links.map(([label, id]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    className: "nav__link",
    onClick: () => onNav(id)
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "nav__right"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav('contact')
  }, "Request a consultation"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// RIADA website — Hero
function Hero({
  onNav
}) {
  const {
    Button,
    Eyebrow
  } = window.RIADADesignSystem_89e94e;
  return /*#__PURE__*/React.createElement("section", {
    className: "hero section--cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container hero__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Strategic Advisory \xB7 GCC"), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "Refined counsel for the region's ", /*#__PURE__*/React.createElement("em", null, "boldest"), " decisions."), /*#__PURE__*/React.createElement("p", {
    className: "hero__lede"
  }, "RIADA gives GCC enterprises, government bodies, and investors the structured clarity to act with confidence \u2014 bridging global rigor with regional fluency."), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('contact')
  }, "Request a consultation"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('practice')
  }, "Explore practice lines")), /*#__PURE__*/React.createElement("div", {
    className: "hero__parent"
  }, /*#__PURE__*/React.createElement("span", null, "A Fiduciam Global company"))), /*#__PURE__*/React.createElement("div", {
    className: "hero__panel"
  }, /*#__PURE__*/React.createElement("span", {
    className: "circle",
    style: {
      width: 220,
      height: 220,
      right: -40,
      top: -40
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "circle",
    style: {
      width: 160,
      height: 160,
      left: -30,
      bottom: 60
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "circle",
    style: {
      width: 110,
      height: 110,
      right: 40,
      bottom: -20
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/riada3_reversed.svg",
    alt: "RIADA"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__quote"
  }, /*#__PURE__*/React.createElement("p", null, "\u201CAmbition meets disciplined execution.\u201D"), /*#__PURE__*/React.createElement("span", null, "The RIADA Operating Principle")))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Practice.jsx
try { (() => {
// RIADA website — Practice lines
const PRACTICE = [['01', 'Strategy & Growth', 'Market entry, expansion, corporate strategy, and Vision-aligned roadmaps.'], ['02', 'Government & Public Sector', 'Policy advisory, transformation programs, and PMO setup.'], ['03', 'Risk & Compliance', 'Governance, risk, Saudization, and regulatory compliance (GRC).'], ['04', 'Digital Transformation', 'AI, analytics, and modernization for measurable outcomes.'], ['05', 'Corporate Finance & M&A', 'Due diligence, deal structuring, and restructuring.'], ['06', 'Organizational Design', 'Operating models, governance, and restructuring.']];
function Practice({
  onNav
}) {
  const {
    Card,
    CardBody,
    CardFooter,
    Eyebrow,
    Button
  } = window.RIADADesignSystem_89e94e;
  return /*#__PURE__*/React.createElement("section", {
    id: "practice",
    className: "section section--cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Practice Lines"), /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, "A focused set of advisory disciplines."), /*#__PURE__*/React.createElement("p", {
    className: "section__intro"
  }, "A curated subset of parent Fiduciam Global's offering \u2014 selected for the decisions that define the Gulf's next decade.")), /*#__PURE__*/React.createElement("div", {
    className: "practice__grid"
  }, PRACTICE.map(([n, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: n,
    index: n,
    title: t,
    accent: true,
    interactive: true,
    onClick: () => onNav('contact')
  }, /*#__PURE__*/React.createElement(CardBody, null, d), /*#__PURE__*/React.createElement(CardFooter, null, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'serif'
      }
    }, "\u2192")
  }, "Discuss this")))))));
}
window.Practice = Practice;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Practice.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Report.jsx
try { (() => {
// RIADA website — The RIADA Report feature (pine section)
function Report({
  onNav
}) {
  const {
    Button,
    Eyebrow,
    Badge
  } = window.RIADADesignSystem_89e94e;
  return /*#__PURE__*/React.createElement("section", {
    id: "report",
    className: "section report"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container report__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onDark"
  }, "Signature Deliverable"), /*#__PURE__*/React.createElement("h2", {
    className: "report__title"
  }, "The ", /*#__PURE__*/React.createElement("em", null, "RIADA"), " Report."), /*#__PURE__*/React.createElement("p", {
    className: "report__lede"
  }, "A refined, executive-grade advisory document \u2014 the considered conclusion of every engagement, built to be read in the boardroom and defended in the market."), /*#__PURE__*/React.createElement("ul", {
    className: "report__list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Board-ready structure, written for decision-makers"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Global frameworks, calibrated to GCC regulation"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Bilingual-aware, Arabic-first where it matters")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('contact')
  }, "Request a sample")), /*#__PURE__*/React.createElement("div", {
    className: "report__doc"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "coral",
    dot: true
  }, "Confidential"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 30,
      lineHeight: 1.1,
      color: 'var(--text-strong)',
      letterSpacing: '-.01em'
    }
  }, "Market Entry & Growth"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 18,
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, "Kingdom of Saudi Arabia \xB7 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-hair)',
      margin: '22px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, ['Executive Summary', 'Regulatory Landscape', 'Entry Pathways', 'Financial Model', 'Recommendation'].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, s), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, String((i + 1) * 4).padStart(2, '0'))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 24,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--riada-coral)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      letterSpacing: '.22em',
      fontSize: 13,
      color: 'var(--text-strong)',
      textTransform: 'uppercase'
    }
  }, "RIADA")))));
}
window.Report = Report;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Report.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardBody = __ds_scope.CardBody;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

})();
