// figma node: 145:62699 Lock Screen Widget / Circular / Open Gauge
export function LockScreenWidgetCircularOpen2(_p = {}) {
  const props = { ..._p, value: _p.value ?? "50%", symbol: _p.symbol ?? "􀙖" };
  return (
    <div className={props.className} style={{
      width: 72,
      height: 72,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      padding: "7px 7px 7px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(64,64,64)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 58,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={58.000} height={50.110} viewBox="0 0 58.000 50.110" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0.081,
          width: 58,
          height: 50.11,
        }}>
          <path d={"M 32.969 0 C 37.296 0.598 41.451 2.167 45.111 4.613 C 49.88 7.8 53.598 12.329 55.793 17.628 C 57.988 22.927 58.561 28.758 57.442 34.383 C 56.323 40.008 53.561 45.176 49.506 49.231 C 48.334 50.403 46.435 50.403 45.263 49.231 C 44.092 48.06 44.092 46.161 45.263 44.989 C 48.48 41.773 50.67 37.674 51.557 33.213 C 52.445 28.751 51.99 24.127 50.249 19.924 C 48.508 15.721 45.56 12.129 41.778 9.602 C 38.961 7.719 35.774 6.491 32.452 5.986 C 33.246 5.101 33.73 3.932 33.73 2.649 C 33.73 1.676 33.451 0.768 32.969 0 Z M 24.435 0.088 C 23.988 0.837 23.73 1.713 23.73 2.649 C 23.73 3.969 24.243 5.169 25.079 6.063 C 21.926 6.608 18.906 7.808 16.221 9.602 C 12.439 12.129 9.492 15.721 7.751 19.924 C 6.01 24.126 5.555 28.751 6.442 33.213 C 7.302 37.535 9.385 41.516 12.438 44.685 L 12.736 44.989 L 12.843 45.101 C 13.907 46.278 13.871 48.096 12.736 49.231 C 11.601 50.366 9.783 50.402 8.605 49.338 L 8.494 49.231 L 8.117 48.849 C 4.267 44.853 1.641 39.832 0.557 34.383 C -0.561 28.758 0.012 22.927 2.207 17.628 C 4.402 12.329 8.119 7.8 12.888 4.613 C 16.381 2.28 20.323 0.744 24.435 0.088 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(1,0,0,-1,26,5.670)",
          transformOrigin: "0 0",
          width: 5.67,
          height: 5.67,
          borderRadius: "50%",
          backgroundColor: "rgb(255,255,255)",
        }} />
        <span style={{
          position: "absolute",
          left: 14,
          top: 41,
          width: 30,
          height: 18,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
        }}>{props.symbol}</span>
        <span style={{
          position: "absolute",
          left: 6,
          top: 18,
          width: 46,
          height: 20,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "100%",
          letterSpacing: "-1px",
          color: "rgb(255,255,255)",
        }}>{props.value}</span>
      </div>
    </div>
  );
}
export default LockScreenWidgetCircularOpen2;
