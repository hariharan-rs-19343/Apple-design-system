// figma node: 3:55053 _Prompt
export function Prompt(_p = {}) {
  const props = { ..._p, promptText: _p.promptText ?? "This is a prompt message." };
  return (
    <div className={props.className} style={{
      width: 393,
      height: 38,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 16,
        top: 7,
        width: 361,
        height: 30,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgba(60,60,67,0.6)",
      }}>{props.promptText}</span>
    </div>
  );
}
export default Prompt;
