// figma node: 5619:49861 _HSQA - Widget - Light (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function HSQAWidgetLight(_p = {}) {
  const props = { ..._p, symbol: _p.symbol ?? "􂘬", state: _p.state ?? "selected" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 38,
      height: 38,
      borderRadius: 8,
      backgroundColor: "var(--fills-vibrant-tertiary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 38,
        height: 38,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 19,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--labels-primary)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 38,
      height: 38,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 38,
        height: 38,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 19,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--labels-primary)",
      }}>{props.symbol}</span>
    </div>
  );
  const __impls = {
    // figma: State=Selected
    "state=selected": __body0,
    // figma: State=Default
    "state=default": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default HSQAWidgetLight;
