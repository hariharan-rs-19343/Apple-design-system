// figma node: 5914:23547 Liquid Glass - Clear/Light
export function LiquidGlassClearLight(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 160,
      height: 160,
      position: "relative",
      ...props.style,
    }}>
      <svg width={160} height={160} viewBox="0 0 160 160" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 160,
        height: 160,
        borderRadius: 296,
        filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.2))",
        color: "rgba(255,255,255,0.07)",
      }}>
        <path d={"M 0 38.4 C 0 24.959 0 18.238 2.616 13.104 C 4.917 8.588 8.588 4.917 13.104 2.616 C 18.238 0 24.959 0 38.4 0 L 121.6 0 C 135.041 0 141.762 0 146.896 2.616 C 151.412 4.917 155.083 8.588 157.384 13.104 C 160 18.238 160 24.959 160 38.4 L 160 121.6 C 160 135.041 160 141.762 157.384 146.896 C 155.083 151.412 151.412 155.083 146.896 157.384 C 141.762 160 135.041 160 121.6 160 L 38.4 160 C 24.959 160 18.238 160 13.104 157.384 C 8.588 155.083 4.917 151.412 2.616 146.896 C 0 141.762 0 135.041 0 121.6 L 0 38.4 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default LiquidGlassClearLight;
