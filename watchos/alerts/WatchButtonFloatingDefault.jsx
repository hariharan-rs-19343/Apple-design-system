// figma node: 4413:224 Button - Floating/Default
export function WatchButtonFloatingDefault(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Floating" };
  return (
    <div className={props.className} style={{
      width: 143,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingBottom: "calc(var(--watch-button-bottom-floating) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        flexGrow: 1,
        borderRadius: 100,
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(30px)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "13px 10px 13px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-button-margin-l-r-floating) * 1px)",
        paddingTop: "calc(var(--watch-button-margin-t) * 1px)",
        paddingRight: "calc(var(--watch-button-margin-l-r-floating) * 1px)",
        paddingBottom: "calc(var(--watch-button-margin-b) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 556,
          fontSize: "calc(var(--watch-button-font-size) * 1px)",
          textAlign: "center",
          lineHeight: "17.500px",
          color: "var(--watch-colors-white-system)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.label}</span>
      </div>
    </div>
  );
}
export default WatchButtonFloatingDefault;
