// figma node: 598:13336 _Buttons/XL (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function MacButtonsXL(_p = {}) {
  const props = { ..._p, symbol: _p.symbol ?? "􀓔", state: _p.state ?? "idle" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 30,
      height: 28,
      minWidth: 28,
      borderRadius: 100,
      display: "flex",
      flexDirection: "row",
      padding: "0px 5px 0px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
        textAlign: "center",
        lineHeight: "22px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        flexGrow: 1,
      }}>{props.symbol}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 30,
      height: 28,
      minWidth: 28,
      borderRadius: 100,
      backgroundColor: "var(--mac-fills-vibrant-use-plus-lighter-darker-secondary)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 5px 0px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
        textAlign: "center",
        lineHeight: "22px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexGrow: 1,
      }}>{props.symbol}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 30,
      height: 28,
      minWidth: 28,
      borderRadius: 100,
      display: "flex",
      flexDirection: "row",
      padding: "0px 5px 0px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
        textAlign: "center",
        lineHeight: "22px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexGrow: 1,
      }}>{props.symbol}</span>
    </div>
  );
  const __impls = {
    // figma: State=Disabled
    "state=disabled": __body0,
    // figma: State=Selected
    "state=selected": __body1,
    // figma: State=Idle
    "state=idle": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default MacButtonsXL;
