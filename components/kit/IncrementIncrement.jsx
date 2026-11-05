// figma node: 5415:17069 _Increment/Increment
export function IncrementIncrement(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 46,
      height: 32,
      borderRadius: "0px 100px 100px 0px",
      backgroundColor: "rgba(116,116,128,0.08)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 5,
        width: 46,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 17,
        textAlign: "center",
        lineHeight: "22px",
        color: "var(--labels-primary)",
      }}>{props.text1 ?? "􀅼"}</span>
    </div>
  );
}
export default IncrementIncrement;
