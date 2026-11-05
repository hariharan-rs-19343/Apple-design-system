// figma node: 525:43148 Lock Screen Widget - Modular Standard
export function LockScreenWidgetModularStandard(_p = {}) {
  const props = { ..._p, header: _p.header ?? "Header", body: _p.body ?? "Preview of body. Lorem ipsum dolor sit amet, consectetur adipiscing…", symbol: _p.symbol ?? "􀿫" };
  return (
    <div className={props.className} style={{
      width: 162,
      height: 72,
      display: "flex",
      flexDirection: "column",
      gap: 1,
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
        height: 13,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          backdropFilter: "blur(40px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "13px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.symbol}</span>
        <div style={{
          position: "relative",
          width: 1,
          borderRadius: 10,
          backgroundColor: "var(--labels-vibrant-secondary)",
          backdropFilter: "blur(40px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <span style={{
          position: "relative",
          backdropFilter: "blur(40px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 860,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "13px",
          color: "var(--labels-vibrant-secondary)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.header}</span>
      </div>
      <span style={{
        position: "relative",
        backdropFilter: "blur(135.914px)",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--labels-vibrant-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.body}</span>
    </div>
  );
}
export default LockScreenWidgetModularStandard;
