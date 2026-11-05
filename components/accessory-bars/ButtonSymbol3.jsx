// figma node: 5522:14754 _Button - Symbol (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property2=" + __venc(p.property2) + '|' + "state=" + __venc(p.state);

export function ButtonSymbol3(_p = {}) {
  const props = { ..._p, property2: _p.property2 ?? "disabled", symbol: _p.symbol ?? "􀓔", state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 100,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--labels-vibrant-tertiary)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 100,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--labels-vibrant-primary)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 100,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(64,64,64)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 100,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(245,245,245)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
    </div>
  );
  const __impls = {
    // figma: State=Disabled
    "property2=|state=disabled": __body0,
    // figma: State=Default
    "property2=|state=default": __body1,
    // figma: State=_Button - Symbol - Dark, Property 2=Disabled
    "property2=disabled|state=_button - symbol - dark": __body2,
    // figma: State=_Button - Symbol - Dark, Property 2=Default
    "property2=default|state=_button - symbol - dark": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ButtonSymbol3;
