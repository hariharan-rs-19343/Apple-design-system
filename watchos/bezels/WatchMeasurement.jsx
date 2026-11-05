// figma node: 2567:19731 _Measurement
export function WatchMeasurement(_p = {}) {
  const props = { ..._p, measurement: _p.measurement ?? "N" };
  return (
    <div className={props.className} style={{
      width: 16,
      height: 28,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 16,
        height: 28,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 26,
          width: 16,
          height: 2,
          backgroundColor: "var(--watch-colors-pink)",
        }} />
        <div style={{
          position: "absolute",
          left: 7,
          top: 2,
          width: 2,
          height: 24,
          backgroundColor: "var(--watch-colors-pink)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 2,
          backgroundColor: "var(--watch-colors-pink)",
        }} />
      </div>
      <span style={{
        position: "absolute",
        left: 18,
        top: 5,
        width: 10,
        height: 16,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(255,45,85)",
      }}>{props.measurement}</span>
    </div>
  );
}
export default WatchMeasurement;
