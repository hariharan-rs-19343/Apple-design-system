// figma node: 537:149883 _Background/Light/Default/Emoji
export function BackgroundLightDefaultEmoji(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 200,
      height: 200,
      background: "linear-gradient(rgb(153,153,153),rgb(153,153,153)), linear-gradient(rgba(91,91,91,0.85),rgba(91,91,91,0.85)), linear-gradient(rgba(86,87,89,0.85),rgba(86,87,89,0.85))",
      backdropFilter: "blur(150px)",
      display: "flex",
      flexDirection: "column",
      gap: 58,
      padding: "6px 0px 6px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }} />
  );
}
export default BackgroundLightDefaultEmoji;
