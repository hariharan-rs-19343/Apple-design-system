// figma node: 525:43106 Lock Screen Widget - Rectangular Text Gauge
export function LockScreenWidgetRectangularText(_p = {}) {
  const props = { ..._p, symbol: _p.symbol ?? "􀿫", line1: _p.line1 ?? "Label", line2: _p.line2 ?? "Label" };
  return (
    <div className={props.className} style={{
      width: 160,
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 13px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 0px 3px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          backdropFilter: "blur(135.914px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(255,255,255)",
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
        }}>{props.line1}</span>
      </div>
      <span style={{
        position: "relative",
        backdropFilter: "blur(135.914px)",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 15,
        lineHeight: "20px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.line2}</span>
      <div style={{
        position: "relative",
        borderRadius: 20,
        backgroundColor: "rgb(23,23,23)",
        backdropFilter: "blur(40px)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 70,
          height: 8,
          borderRadius: 4,
          backgroundColor: "rgb(255,255,255)",
          backdropFilter: "blur(135.914px)",
          flexShrink: 0,
        }} />
      </div>
    </div>
  );
}
export default LockScreenWidgetRectangularText;
