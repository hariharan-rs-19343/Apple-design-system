// figma node: 513:90699 _Title and Description (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function TitleAndDescription(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", title: _p.title ?? "A Short Title is Best", description: _p.description ?? "A message should be a short, complete sentence.", showDescription: _p.showDescription ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderTop: "1px solid rgba(128,128,128,0.55)",
      borderRight: "1px solid rgba(128,128,128,0.55)",
      borderBottom: "0.333px solid rgba(128,128,128,0.55)",
      borderLeft: "1px solid rgba(128,128,128,0.55)",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "12px 16px 14px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 13,
        textAlign: "center",
        lineHeight: "18px",
        letterSpacing: "-0.080px",
        color: "rgba(127,127,127,0.5)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
      {props.showDescription && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        textAlign: "center",
        lineHeight: "18px",
        letterSpacing: "-0.080px",
        color: "rgba(127,127,127,0.5)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.description}</span>
      )}
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
export default TitleAndDescription;
