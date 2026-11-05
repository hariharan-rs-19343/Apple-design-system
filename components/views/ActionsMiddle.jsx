// figma node: 126:58327 _Actions/Middle
export function ActionsMiddle(_p = {}) {
  const props = { ..._p, text: _p.text ?? "Title", symbol: _p.symbol ?? "􀋂" };
  return (
    <div className={props.className} style={{
      width: 393,
      height: 50,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 16,
        top: 0,
        width: 361,
        height: 50,
        backgroundColor: "var(--backgrounds-grouped-secondary)",
        display: "flex",
        flexDirection: "row",
        gap: 277,
        padding: "0px 16px 0px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          borderTop: "1px solid rgba(0,0,0,0.12)",
          borderRight: "1px solid rgba(0,0,0,0.12)",
          borderBottom: "0.333px solid rgba(0,0,0,0.12)",
          borderLeft: "1px solid rgba(0,0,0,0.12)",
          display: "flex",
          flexDirection: "row",
          padding: "5px 24px 5px 0px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.500px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>{props.text}</span>
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
          }}>{props.symbol}</span>
        </div>
      </div>
    </div>
  );
}
export default ActionsMiddle;
