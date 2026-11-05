// figma node: 30:53833 Date and Time - Compact - Collapsed/Time
export function DateAndTimeCompactCollapsed2(_p = {}) {
  const props = { ..._p, month: _p.month ?? "Jun 9,", year: _p.year ?? "2025", time: _p.time ?? "9:41 AM" };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      height: 34,
      borderRadius: 6,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 11px 6px 11px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--labels-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.time}</span>
    </div>
  );
}
export default DateAndTimeCompactCollapsed2;
