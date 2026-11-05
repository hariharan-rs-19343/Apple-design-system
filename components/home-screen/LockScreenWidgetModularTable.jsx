// figma node: 525:43141 Lock Screen Widget - Modular Table
export function LockScreenWidgetModularTable(_p = {}) {
  const props = { ..._p, symbol: _p.symbol ?? "􀿫", line1: _p.line1 ?? "Label", line3: _p.line3 ?? "Label", line2: _p.line2 ?? "Label" };
  return (
    <div className={props.className} style={{
      width: 162,
      height: 72,
      display: "flex",
      flexDirection: "column",
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
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
        gap: 3,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          backdropFilter: "blur(135.914px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        <span style={{
          position: "relative",
          backdropFilter: "blur(135.914px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          lineHeight: "20px",
          color: "var(--labels-vibrant-primary)",
          flexGrow: 1,
        }}>{props.line1}</span>
      </div>
      <span style={{
        position: "relative",
        backdropFilter: "blur(135.914px)",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 15,
        lineHeight: "18px",
        color: "var(--labels-vibrant-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.line2}</span>
      <span style={{
        position: "relative",
        backdropFilter: "blur(135.914px)",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 15,
        lineHeight: "18px",
        color: "var(--labels-vibrant-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.line3}</span>
    </div>
  );
}
export default LockScreenWidgetModularTable;
