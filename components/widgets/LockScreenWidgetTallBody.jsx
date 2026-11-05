// figma node: 525:43115 Lock Screen Widget - Tall Body with Icon
export function LockScreenWidgetTallBody(_p = {}) {
  const props = { ..._p, symbol: _p.symbol ?? "􀿫", header: _p.header ?? "Label", title: _p.title ?? "Label" };
  return (
    <div className={props.className} style={{
      width: 162,
      display: "flex",
      flexDirection: "column",
      gap: -3,
      padding: "6px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 1,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          backdropFilter: "blur(135.914px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
          flexShrink: 0,
        }}>{props.symbol}</span>
        <span style={{
          position: "relative",
          backdropFilter: "blur(135.914px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
          flexShrink: 0,
        }}>{props.header}</span>
      </div>
      <span style={{
        position: "relative",
        backdropFilter: "blur(135.914px)",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 43,
        lineHeight: "41px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
}
export default LockScreenWidgetTallBody;
