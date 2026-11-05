// figma node: 525:43610 Lock Screen Widget / Circular / Stack 2 Rows - Labels
export function LockScreenWidgetCircularStack3(_p = {}) {
  const props = { ..._p, secondaryLabel: _p.secondaryLabel ?? "Label" };
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
        gap: -2.5,
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
        }}>{props.secondaryLabel}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
}
export default LockScreenWidgetCircularStack3;
