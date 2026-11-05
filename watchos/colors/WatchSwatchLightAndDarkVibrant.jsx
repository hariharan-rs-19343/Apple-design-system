// figma node: 8512:9625 _Swatch - Light and Dark - Vibrant
export function WatchSwatchLightAndDarkVibrant(_p = {}) {
  const props = _p;
  return (
    <div className={"fig-asset-5ff18ec9130adf6a-b81c109d " + (props.className || '')} style={{
      width: 160,
      height: 160,
      position: "relative",
      ...props.style,
    }}>
      <svg width={120} height={120} viewBox="0 0 120 120" fill="none" style={{
        position: "absolute",
        left: 20,
        top: 20,
        width: 120,
        height: 120,
        borderRadius: 100,
      }}>
        <path d={"M 0 60 C 0 26.863 26.863 0 60 0 C 93.137 0 120 26.863 120 60 C 120 93.137 93.137 120 60 120 C 26.863 120 0 93.137 0 60 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 0,
        top: -30,
        width: 33,
        height: 18,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "-0.080px",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
}
export default WatchSwatchLightAndDarkVibrant;
