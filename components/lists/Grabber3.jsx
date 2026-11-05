// figma node: 5533:12351 _Grabber
export function Grabber3(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        lineHeight: "25px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "􀌇"}</span>
    </div>
  );
}
export default Grabber3;
