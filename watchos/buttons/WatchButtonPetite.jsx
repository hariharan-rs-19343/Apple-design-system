// figma node: 4413:227 Button - Petite
export function WatchButtonPetite(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Action" };
  return (
    <div className={props.className} style={{
      width: 143,
      height: "calc(var(--watch-button-height-petite) * 1px)",
      overflow: "hidden",
      borderRadius: 100,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 9.500px 0px 9.500px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 100,
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 10px 0px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-button-l-r-inset) * 1px)",
        paddingRight: "calc(var(--watch-button-l-r-inset) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 556,
          fontSize: "calc(var(--watch-button-font-size) * 1px)",
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18.500px",
          color: "var(--watch-colors-white-system)",
          flexGrow: 1,
        }}>{props.label}</span>
      </div>
    </div>
  );
}
export default WatchButtonPetite;
