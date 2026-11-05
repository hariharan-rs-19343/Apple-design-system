// figma node: 4405:258 _Button - Text
export function WatchButtonText(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Done" };
  return (
    <div className={props.className} style={{
      width: 53,
      height: "calc(var(--watch-nav-bar-button-height) * 1px)",
      borderRadius: 100,
      backgroundColor: "rgba(255,255,255,0.05)",
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
        fontWeight: 556,
        fontSize: "calc(var(--watch-nav-bar-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "19.500px",
        color: "var(--watch-vibrant-text-colors-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
}
export default WatchButtonText;
