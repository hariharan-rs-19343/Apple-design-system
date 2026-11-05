// figma node: 118:2148 iOS/_Mini Tip/Close
export function IOSMiniTipClose(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 30,
      height: 30,
      borderRadius: 100,
      backgroundColor: "rgba(120,120,128,0.16)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 30,
        height: 30,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "30px",
        color: "rgba(60,60,67,0.6)",
      }}>{props.text1 ?? "􀆄"}</span>
    </div>
  );
}
export default IOSMiniTipClose;
