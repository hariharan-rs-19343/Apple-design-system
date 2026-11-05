// figma node: 525:43126 Lock Screen Widget - Modular Columns
export function LockScreenWidgetModularColumns(_p = {}) {
  const props = { ..._p, line3Leading: _p.line3Leading ?? "Label", symbol1: _p.symbol1 ?? "􀿫", line1Trailing: _p.line1Trailing ?? "Label", line1Leading: _p.line1Leading ?? "Label", line3Trailing: _p.line3Trailing ?? "Label", symbol2: _p.symbol2 ?? "􀿫", line2Trailing: _p.line2Trailing ?? "Label", line2Leading: _p.line2Leading ?? "Label", symbol3: _p.symbol3 ?? "􀿫" };
  return (
    <div className={props.className} style={{
      width: 162,
      display: "flex",
      flexDirection: "column",
      gap: -1,
      padding: "8px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          backdropFilter: "blur(135.914px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.symbol1}</span>
        <span style={{
          position: "relative",
          backdropFilter: "blur(135.914px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 15,
          lineHeight: "20px",
          color: "var(--labels-vibrant-primary)",
          textTransform: "uppercase",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.line1Leading}</span>
        <span style={{
          position: "relative",
          backdropFilter: "blur(135.914px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--labels-vibrant-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.line1Trailing}</span>
      </div>
      <div style={{
        position: "relative",
        height: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          backdropFilter: "blur(135.914px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.symbol2}</span>
        <span style={{
          position: "relative",
          backdropFilter: "blur(135.914px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 15,
          lineHeight: "20px",
          color: "var(--labels-vibrant-primary)",
          textTransform: "uppercase",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.line2Leading}</span>
        <span style={{
          position: "relative",
          backdropFilter: "blur(135.914px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.line2Trailing}</span>
      </div>
      <div style={{
        position: "relative",
        height: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          backdropFilter: "blur(135.914px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.symbol3}</span>
        <span style={{
          position: "relative",
          backdropFilter: "blur(135.914px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 15,
          lineHeight: "20px",
          color: "var(--labels-vibrant-primary)",
          textTransform: "uppercase",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.line3Leading}</span>
        <span style={{
          position: "relative",
          backdropFilter: "blur(135.914px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--labels-vibrant-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.line3Trailing}</span>
      </div>
    </div>
  );
}
export default LockScreenWidgetModularColumns;
