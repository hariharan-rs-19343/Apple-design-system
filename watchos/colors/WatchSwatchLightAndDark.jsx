// figma node: 8512:8303 _Swatch - Light and Dark
export function WatchSwatchLightAndDark(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 160,
      height: 160,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-7f796ce21f42e90f-4c236e23" style={{
        position: "absolute",
        left: 0,
        top: 80,
        width: 160,
        height: 80,
        overflow: "hidden",
      }}>
        <svg width={120} height={60} viewBox="0 0 120 60" fill="none" style={{
          position: "absolute",
          left: 20,
          top: 0,
          width: 120,
          height: 60,
          borderRadius: 100,
          color: "rgb(255,56,60)",
        }}>
          <path d={"M 0 0 L 120 0 C 120 33.137 93.137 60 60 60 C 26.863 60 0 33.137 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div className="fig-asset-7f796ce21f42e90f-61c27bbc" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 160,
        height: 80,
        overflow: "hidden",
      }}>
        <svg width={120} height={60} viewBox="0 0 120 60" fill="none" style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 120,
          height: 60,
          borderRadius: 100,
          color: "var(--watch-accents-red)",
        }}>
          <path d={"M 0 60 C 0 26.863 26.863 0 60 0 C 93.137 0 120 26.863 120 60 L 0 60 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
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
export default WatchSwatchLightAndDark;
