// figma node: 35:55757 Grouped Table Footer
export function GroupedTableFooter(_p = {}) {
  const props = { ..._p, text: _p.text ?? "Footer text" };
  return (
    <div className={props.className} style={{
      width: 300,
      display: "flex",
      flexDirection: "column",
      padding: "8px 16px 6px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        lineHeight: "18px",
        color: "rgba(60,60,67,0.6)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text}</span>
    </div>
  );
}
export default GroupedTableFooter;
