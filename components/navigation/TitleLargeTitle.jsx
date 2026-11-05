// figma node: 5827:57551 _Title - Large Title (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function TitleLargeTitle(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", title: _p.title ?? "Title" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 69,
      height: 41,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 69,
        height: 41,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 34,
        whiteSpace: "nowrap",
        lineHeight: "41px",
        letterSpacing: "0.400px",
        color: "rgb(245,245,245)",
      }}>{props.title}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 69,
      height: 41,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 69,
        height: 41,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 34,
        whiteSpace: "nowrap",
        lineHeight: "41px",
        letterSpacing: "0.400px",
        color: "var(--labels-vibrant-primary)",
      }}>{props.title}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default TitleLargeTitle;
