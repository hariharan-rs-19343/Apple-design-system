// figma node: 5431:1765 Button/Background/Over Dark Background/Bright/True
export function ButtonBackgroundOverDarkBackground2(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      overflow: "hidden",
      borderRadius: 1000,
      background: "linear-gradient(rgb(153,153,153),rgb(153,153,153)), linear-gradient(rgb(255,255,255),rgb(255,255,255)), linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5))",
      boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.1), 0px 1px 8px 0px rgba(0,0,0,0.12)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 48,
        height: 48,
        backgroundColor: "rgb(0,136,255)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 48,
        height: 48,
        borderRadius: 296,
        backgroundColor: "rgb(0,0,0)",
      }} />
    </div>
  );
}
export default ButtonBackgroundOverDarkBackground2;
