// figma node: 39:63995 _Button / Left
export function ButtonLeft(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Action" };
  return (
    <div className={props.className} style={{
      width: 361,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 49,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(0,0,0)",
      }}>{props.label}</span>
    </div>
  );
}
export default ButtonLeft;
