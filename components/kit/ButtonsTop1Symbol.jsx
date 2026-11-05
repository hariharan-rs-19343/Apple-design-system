// figma node: 5565:35481 _Buttons - Top/1 Symbol
export function ButtonsTop1Symbol(_p = {}) {
  const dark = (_p.mode ?? "dark") === "dark";
  return (
    <button type="button" onClick={_p.onClick} className={_p.className} style={{
      width: 44, height: 44, padding: 0, border: 0, borderRadius: "50%", cursor: "pointer", boxSizing: "border-box",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      background: dark ? "rgba(120,120,128,0.72)" : "rgba(255,255,255,0.78)",
      backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
      boxShadow: "0 8px 40px rgba(0,0,0,0.12), inset 0 0 0 0.5px rgba(255,255,255,0.35)",
      color: dark ? "#fff" : "var(--labels-primary, #000)",
      ..._p.style,
    }}>
      <span style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {_p.icon ?? <span style={{ width: 19, height: 19, borderRadius: 4, border: "2px dashed rgb(255,230,0)", boxSizing: "border-box" }}></span>}
      </span>
    </button>
  );
}
export default ButtonsTop1Symbol;
