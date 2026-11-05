// figma node: 4414:134 Button - Corner
export function WatchButtonCorner(_p = {}) {
  const props = { ..._p, label: _p.label ?? "􀆄" };
  return (
    <div className={props.className} style={{
      width: "calc(var(--watch-button-height-corner) * 1px)",
      height: "calc(var(--watch-button-height-corner) * 1px)",
      overflow: "hidden",
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
        fontSize: "calc(var(--watch-button-font-size-corner) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(242,244,252)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
}
export default WatchButtonCorner;
