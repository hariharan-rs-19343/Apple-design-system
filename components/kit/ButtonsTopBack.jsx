// figma node: 5565:35442 _Buttons - Top/Back
export function ButtonsTopBack(_p = {}) {
  const dark = (_p.mode ?? "dark") === "dark";
  const fg = dark ? "#fff" : "var(--labels-primary, #000)";
  return (
    <button type="button" onClick={_p.onClick} className={_p.className} style={{
      height: 44, minWidth: 44, boxSizing: "border-box", padding: "0 16px 0 12px",
      display: "inline-flex", alignItems: "center", gap: 6, border: 0, borderRadius: 296, cursor: "pointer",
      background: dark ? "rgba(120,120,128,0.72)" : "rgba(255,255,255,0.78)",
      backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
      boxShadow: "0 8px 40px rgba(0,0,0,0.12), inset 0 0 0 0.5px rgba(255,255,255,0.35)",
      color: fg, fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, sans-serif", fontSize: 17, fontWeight: 510, letterSpacing: "-0.43px", lineHeight: "22px",
      ..._p.style,
    }}>
      <svg width="11" height="19" viewBox="0 0 11 19" fill="none" style={{ display: "block", flexShrink: 0 }}>
        <path d="M9.5 1.5 L1.8 9.5 L9.5 17.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span style={{ whiteSpace: "nowrap" }}>{_p.label ?? "Label"}</span>
    </button>
  );
}
export default ButtonsTopBack;
