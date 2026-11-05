// figma node: 145:62733 Lock Screen Widget / Circular / Stack 3 Rows
export function LockScreenWidgetCircularStack(_p = {}) {
  const props = { ..._p, value: _p.value ?? "8:29", secondaryValue: _p.secondaryValue ?? "PM", symbol: _p.symbol ?? "􀆴" };
  return (
    <div className={props.className} style={{
      width: 72,
      height: 72,
      backdropFilter: "blur(40px)",
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
        backgroundColor: "var(--fills-vibrant-tertiary)",
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
          fontSize: 11,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.symbol}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.value}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 9,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.secondaryValue}</span>
      </div>
    </div>
  );
}
export default LockScreenWidgetCircularStack;
