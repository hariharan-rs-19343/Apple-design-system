// figma node: 525:43609 Lock Screen Widget / Circular / Stack 2 Rows - Icon and Label
export function LockScreenWidgetCircularStack2(_p = {}) {
  const props = { ..._p, symbol: _p.symbol ?? "􀿫", label: _p.label ?? "Label" };
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
          fontWeight: 400,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "13px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.label}</span>
      </div>
    </div>
  );
}
export default LockScreenWidgetCircularStack2;
