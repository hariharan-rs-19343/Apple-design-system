// figma node: 5511:19381 _Chevron (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function Chevron(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 14,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "var(--labels-vibrant-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "􀆊"}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark Elevated
    "mode=dark elevated": __body0,
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Chevron;
