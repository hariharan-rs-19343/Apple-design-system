// figma node: 4412:29831 Button - Circular (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function WatchButtonCircular(_p = {}) {
  const props = { ..._p, label: _p.label ?? "􀅼", type: _p.type ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-button-height-circular) * 1px)",
      height: "calc(var(--watch-button-height-circular) * 1px)",
      borderRadius: 100,
      backgroundColor: "rgb(255,66,69)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 656,
        fontSize: "calc(var(--watch-button-font-size-circular) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1,
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "center",
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-button-height-circular) * 1px)",
      height: "calc(var(--watch-button-height-circular) * 1px)",
      borderRadius: 100,
      backgroundColor: "var(--watch-colors-red)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 656,
        fontSize: "calc(var(--watch-button-font-size-circular) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1,
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "center",
      }}>{props.label}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-button-height-circular) * 1px)",
      height: "calc(var(--watch-button-height-circular) * 1px)",
      borderRadius: 100,
      backgroundColor: "rgba(255,255,255,0.1)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "13px 6px 13px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--watch-button-margin-t) * 1px)",
      paddingBottom: "calc(var(--watch-button-margin-b) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 656,
        fontSize: "calc(var(--watch-button-font-size-circular) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1,
        color: "rgb(255,255,255)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-button-height-circular) * 1px)",
      height: "calc(var(--watch-button-height-circular) * 1px)",
      borderRadius: 100,
      background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 656,
        fontSize: "calc(var(--watch-button-font-size-circular) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1,
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "center",
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: Type=Primary Floating
    "type=primary floating": __body0,
    // figma: Type=Primary
    "type=primary": __body1,
    // figma: Type=Default Floating
    "type=default floating": __body2,
    // figma: Type=Default
    "type=default": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default WatchButtonCircular;
