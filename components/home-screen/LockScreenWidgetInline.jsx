// figma node: 145:62745 Lock Screen Widget - Inline
export function LockScreenWidgetInline(_p = {}) {
  const props = { ..._p, text: _p.text ?? "Tue 1 􀆪 SFO 9:41 AM" };
  return (
    <div className={props.className} style={{
      width: 327,
      backdropFilter: "blur(20px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        backdropFilter: "blur(40px)",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 22,
        textAlign: "center",
        lineHeight: "100%",
        letterSpacing: "-0.200px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text}</span>
    </div>
  );
}
export default LockScreenWidgetInline;
