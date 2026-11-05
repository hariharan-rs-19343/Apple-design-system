// figma node: 5855:4981 Section Title - iPhone (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function SectionTitleIPhone(_p = {}) {
  const props = { ..._p, text: _p.text ?? "Section Title", mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 160,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 8px 10px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "15px",
        letterSpacing: "-0.080px",
        color: "var(--labels-vibrant-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default SectionTitleIPhone;
