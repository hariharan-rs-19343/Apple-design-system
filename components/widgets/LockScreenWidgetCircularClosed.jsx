// figma node: 525:43689 Lock Screen Widget / Circular / Closed Gauge
export function LockScreenWidgetCircularClosed(_p = {}) {
  const props = { ..._p, symbol: _p.symbol ?? "􀿫" };
  return (
    <div className={props.className} style={{
      width: 72,
      height: 72,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "column",
      padding: "7px 7px 7px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 55.387,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 58,
          height: 58,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 6px rgb(0,0,0)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 58,
          height: 58,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 6px rgb(0,0,0)",
        }} />
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 58,
          height: 58,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 19,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "rgb(255,255,255)",
        }}>{props.symbol}</span>
      </div>
    </div>
  );
}
export default LockScreenWidgetCircularClosed;
