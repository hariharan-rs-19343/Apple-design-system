// figma node: 525:43156 Lock Screen Widget - Modular List
export function LockScreenWidgetModularList(_p = {}) {
  const props = { ..._p, bullet1: _p.bullet1 ?? "􀀀", line1: _p.line1 ?? "Item 1", line3: _p.line3 ?? "Item 3", bullet2: _p.bullet2 ?? "􀀀", line2: _p.line2 ?? "Item 2", bullet3: _p.bullet3 ?? "􀀀" };
  return (
    <div className={props.className} style={{
      width: 162,
      height: 72,
      display: "flex",
      flexDirection: "column",
      padding: "0px 8px 0px 8px",
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
        gap: 3,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          backdropFilter: "blur(40px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--labels-vibrant-tertiary)",
          flexShrink: 0,
        }}>{props.bullet1}</span>
        <span style={{
          position: "relative",
          width: 124,
          backdropFilter: "blur(135.914px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 15,
          lineHeight: "20px",
          color: "var(--labels-vibrant-primary)",
          textTransform: "uppercase",
          flexShrink: 0,
        }}>{props.line1}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          backdropFilter: "blur(40px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--labels-vibrant-tertiary)",
          flexShrink: 0,
        }}>{props.bullet2}</span>
        <span style={{
          position: "relative",
          width: 124,
          backdropFilter: "blur(135.914px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 15,
          lineHeight: "20px",
          color: "var(--labels-vibrant-primary)",
          textTransform: "uppercase",
          flexShrink: 0,
        }}>{props.line2}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          backdropFilter: "blur(40px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--labels-vibrant-tertiary)",
          flexShrink: 0,
        }}>{props.bullet3}</span>
        <span style={{
          position: "relative",
          width: 124,
          backdropFilter: "blur(135.914px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 15,
          lineHeight: "20px",
          color: "var(--labels-vibrant-primary)",
          textTransform: "uppercase",
          flexShrink: 0,
        }}>{props.line3}</span>
      </div>
    </div>
  );
}
export default LockScreenWidgetModularList;
