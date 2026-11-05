// figma node: 5713:47505 Edit Menu
const EM_DEFAULT = [{ label: "Item" }, { label: "Item" }, { label: "Item" }, { label: "Item", destructive: true }, { label: "Item" }, { label: "Item" }];

export function EditMenu(_p = {}) {
  const dark = _p.mode === "dark";
  const items = _p.items ?? EM_DEFAULT;
  const fg = dark ? "#fff" : "var(--labels-primary, #000)";
  const sep = dark ? "rgba(255,255,255,0.22)" : "rgba(60,60,67,0.22)";
  return (
    <div className={_p.className} style={{
      height: 44, display: "inline-flex", alignItems: "center", padding: "0 4px", boxSizing: "border-box", borderRadius: 100,
      background: dark ? "rgba(44,44,46,0.82)" : "rgba(255,255,255,0.82)",
      backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
      boxShadow: "0 8px 40px rgba(0,0,0,0.12), inset 0 0 0 0.5px rgba(255,255,255,0.4)",
      fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, sans-serif", fontSize: 17, fontWeight: 400, letterSpacing: "-0.43px", lineHeight: "22px",
      ..._p.style,
    }}>
      {items.map((it, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", height: 44 }}>
          {i > 0 && <span style={{ width: 1, height: 16, background: sep, flexShrink: 0 }}></span>}
          <span onClick={it.onClick} style={{ padding: "0 16px", whiteSpace: "nowrap", cursor: "pointer", color: it.destructive ? "var(--accents-red, rgb(255,56,60))" : fg }}>{it.label}</span>
        </div>
      ))}
      {_p.showMore !== false && (
        <span onClick={_p.onMore} style={{ width: 36, height: 36, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", background: dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.05)", color: fg }}>
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" style={{ display: "block" }}><path d="M1.5 1.5 L6.5 7 L1.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      )}
    </div>
  );
}
export default EditMenu;
