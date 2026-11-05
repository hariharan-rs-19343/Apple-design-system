// figma node: 537:133485 _Background/Light/Vibrant/Default
export function BackgroundLightVibrantDefault(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 200,
      height: 200,
      background: "linear-gradient(rgb(64,64,64),rgb(64,64,64)), linear-gradient(rgba(161,161,161,0.92),rgba(161,161,161,0.92))",
      backdropFilter: "blur(100px)",
      position: "relative",
      ...props.style,
    }} />
  );
}
export default BackgroundLightVibrantDefault;
