// figma node: 6445:6516 _Edit Label
export function WatchEditLabel(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Label" };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      padding: "0px 4px 0px 4px",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        maxWidth: 75,
        maxHeight: null,
        borderRadius: 3,
        backgroundColor: "var(--watch-colors-green)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 4px 2px 4px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 790,
          fontSize: 13,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "15.500px",
          color: "var(--watch-colors-black)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.label}</span>
      </div>
    </div>
  );
}
export default WatchEditLabel;
