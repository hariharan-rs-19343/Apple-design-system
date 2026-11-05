// figma node: 525:43588 Lock Screen Widget / Circular / Icon
export function LockScreenWidgetCircularIcon(_p = {}) {
  const props = { ..._p, symbol: _p.symbol ?? "􀿫" };
  return (
    <div className={props.className} style={{
      width: 72,
      height: 72,
      borderRadius: 100,
      backdropFilter: "blur(50px)",
      display: "flex",
      flexDirection: "row",
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
        width: 58,
        borderRadius: 100,
        backgroundColor: "rgb(31,31,31)",
        display: "flex",
        flexDirection: "column",
        padding: "7px 0px 7px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 24,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.symbol}</span>
      </div>
    </div>
  );
}
export default LockScreenWidgetCircularIcon;
