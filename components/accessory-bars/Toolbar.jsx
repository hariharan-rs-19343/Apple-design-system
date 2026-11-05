// figma node: 5511:64186 _Toolbar (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function Toolbar(_p = {}) {
  const props = { ..._p, symbol: _p.symbol ?? "􀹃", state: _p.state ?? "disabled" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 3,
        top: 4,
        width: 26,
        height: 25,
        opacity: 0.35,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 21,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--labels-vibrant-tertiary)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 3,
        top: 4,
        width: 26,
        height: 25,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 21,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--labels-vibrant-primary)",
      }}>{props.symbol}</span>
    </div>
  );
  const __impls = {
    // figma: State=Disabled
    "state=disabled": __body0,
    // figma: State=Default
    "state=default": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Toolbar;
