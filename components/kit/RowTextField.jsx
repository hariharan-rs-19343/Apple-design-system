// figma: Row - Text Field
export function RowTextField(p = {}) {
  const dark = p.mode === "dark";
  return (
    <div className={p.className} style={{ width: 370, minHeight: 52, boxSizing: "border-box", display: "flex", alignItems: "center", gap: 12, padding: "0 16px", background: dark ? "rgb(28,28,30)" : "#fff", fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, sans-serif", fontSize: 17, letterSpacing: "-0.43px", ...p.style }}>
      {p.label != null && <span style={{ color: dark ? "#fff" : "var(--labels-primary, #000)", whiteSpace: "nowrap" }}>{p.label}</span>}
      <input value={p.value} defaultValue={p.value == null ? p.defaultValue : undefined} onChange={p.onChange} placeholder={p.placeholder ?? "Placeholder"} style={{ flex: 1, minWidth: 0, border: 0, outline: 0, background: "transparent", font: "inherit", letterSpacing: "inherit", color: dark ? "#fff" : "var(--labels-primary, #000)", textAlign: p.label != null ? "right" : "left" }} />
    </div>
  );
}
export default RowTextField;
