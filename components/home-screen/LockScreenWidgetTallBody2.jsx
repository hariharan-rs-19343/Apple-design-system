// figma node: 525:43122 Lock Screen Widget - Tall Body
export function LockScreenWidgetTallBody2(_p = {}) {
  const props = { ..._p, line1: _p.line1 ?? "Label", line2: _p.line2 ?? "Label" };
  return (
    <div className={props.className} style={{
      width: 162,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "6px 8px 5px 8px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        backdropFilter: "blur(135.914px)",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.line1}</span>
      <span style={{
        position: "relative",
        backdropFilter: "blur(135.914px)",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 34,
        lineHeight: "41px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.line2}</span>
    </div>
  );
}
export default LockScreenWidgetTallBody2;
