// figma node: 525:43071 Lock Screen Widget - Modular with Bar
export function LockScreenWidgetModularWith(_p = {}) {
  const props = { ..._p, line1: _p.line1 ?? "11:30AM-12:30PM", line2: _p.line2 ?? "Design Review", line3: _p.line3 ?? "Conference Room" };
  return (
    <div className={props.className} style={{
      width: 162,
      height: 72,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "8px 8px 8px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 5,
        opacity: 0.9,
        borderRadius: 3,
        backgroundColor: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          backdropFilter: "blur(40px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 16,
          lineHeight: "21px",
          letterSpacing: "-0.400px",
          color: "var(--labels-vibrant-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.line1}</span>
        <span style={{
          position: "relative",
          backdropFilter: "blur(40px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 16,
          lineHeight: "21px",
          letterSpacing: "-0.400px",
          color: "var(--labels-vibrant-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.line2}</span>
        <span style={{
          position: "relative",
          backdropFilter: "blur(40px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          lineHeight: "20px",
          letterSpacing: "-0.400px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.line3}</span>
      </div>
    </div>
  );
}
export default LockScreenWidgetModularWith;
