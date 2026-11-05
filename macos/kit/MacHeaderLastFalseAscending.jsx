// figma node: 233:3950 Header/Last/False/Ascending
export function MacHeaderLastFalseAscending(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Label" };
  return (
    <div className={props.className} style={{
      width: 200,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: -1,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 28,
        borderTop: "1px solid rgba(0,0,0,0.05)",
        borderRight: "1px solid rgba(0,0,0,0.05)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        borderLeft: "1px solid rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 5px 0px 5px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "14px",
          color: "rgba(0,0,0,0.5)",
          flexGrow: 1,
        }}>{props.label}</span>
      </div>
    </div>
  );
}
export default MacHeaderLastFalseAscending;
