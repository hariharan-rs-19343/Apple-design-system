// figma node: 5426:6765 Button/Background/Over Dark Background/Bright/False
export function ButtonBackgroundOverDarkBackground(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      overflow: "hidden",
      borderRadius: 296,
      backgroundColor: "rgba(0,0,0,0.03)",
      boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.1), 0px 1px 8px 0px rgba(0,0,0,0.12)",
      position: "relative",
      ...props.style,
    }} />
  );
}
export default ButtonBackgroundOverDarkBackground;
