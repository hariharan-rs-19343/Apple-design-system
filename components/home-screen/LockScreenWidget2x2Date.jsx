// figma node: 526:38824 Lock Screen Widget/2x2/Date (iPad Only)
export function LockScreenWidget2x2Date(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 162,
      height: 162,
      position: "relative",
      color: "var(--labels-vibrant-primary)",
      ...props.style,
    }}>
      <svg width={38.883} height={88.778} viewBox="0 0 38.883 88.778" fill="none" style={{
        position: "absolute",
        left: 58,
        top: 52.222,
        width: 38.883,
        height: 88.778,
      }}>
        <path d={"M 26.763 88.778 C 25.942 88.778 25.286 88.655 24.794 88.409 C 24.302 88.163 23.933 87.794 23.687 87.302 C 23.44 86.81 23.317 86.153 23.317 85.333 L 23.317 15.073 L 22.948 15.073 L 3.814 28.301 C 3.117 28.752 2.481 28.957 1.907 28.916 C 1.374 28.834 0.923 28.588 0.554 28.178 C 0.185 27.768 0 27.132 0 26.271 L 0 19.318 C 0 18.539 0.062 17.883 0.185 17.35 C 0.349 16.816 0.595 16.345 0.923 15.935 C 1.292 15.524 1.825 15.094 2.522 14.643 L 20.856 1.661 C 21.513 1.169 22.087 0.82 22.579 0.615 C 23.071 0.369 23.563 0.205 24.056 0.123 C 24.589 0.041 25.286 0 26.147 0 L 35.376 0 C 36.237 0 36.894 0.144 37.345 0.431 C 37.837 0.677 38.206 1.046 38.452 1.538 C 38.739 1.989 38.883 2.646 38.883 3.507 L 38.883 85.271 C 38.883 86.133 38.739 86.81 38.452 87.302 C 38.206 87.753 37.837 88.122 37.345 88.409 C 36.894 88.655 36.237 88.778 35.376 88.778 L 26.763 88.778 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 162,
        height: 38,
        backdropFilter: "blur(40px)",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 32,
        textAlign: "center",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "Mon Jun"}</span>
    </div>
  );
}
export default LockScreenWidget2x2Date;
