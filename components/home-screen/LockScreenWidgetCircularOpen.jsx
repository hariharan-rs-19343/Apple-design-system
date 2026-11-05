// figma node: 145:62670 Lock Screen Widget / Circular / Open Gauge 2
export function LockScreenWidgetCircularOpen(_p = {}) {
  const props = { ..._p, value: _p.value ?? "67", maxValue: _p.maxValue ?? "78", minValue: _p.minValue ?? "50" };
  return (
    <div className={props.className} style={{
      width: 72,
      height: 72,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "column",
      padding: "7px 7px 7px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 55.387,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={58} height={45.469} viewBox="0 0 58 45.469" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0.001,
          width: 58,
          height: 45.469,
        }}>
          <path d={"M 28.696 0.002 C 32.494 -0.038 36.25 0.669 39.754 2.068 C 38.995 2.482 38.337 3.102 37.873 3.905 C 37.204 5.064 37.066 6.385 37.384 7.585 C 34.646 6.513 31.719 5.97 28.759 6.001 C 24.701 6.043 20.727 7.158 17.24 9.233 C 13.753 11.308 10.877 14.269 8.903 17.814 C 6.93 21.36 5.93 25.365 6.004 29.422 C 6.074 33.225 7.085 36.947 8.943 40.257 L 9.326 40.915 L 9.403 41.048 C 10.155 42.446 9.687 44.203 8.314 45.035 C 6.897 45.893 5.053 45.439 4.194 44.022 C 1.544 39.646 0.099 34.646 0.005 29.531 C -0.089 24.416 1.172 19.366 3.66 14.896 C 6.148 10.426 9.776 6.693 14.173 4.077 C 18.57 1.461 23.58 0.055 28.696 0.002 Z M 46.95 6.223 C 49.792 8.463 52.2 11.223 54.038 14.369 C 56.619 18.786 57.987 23.807 58 28.923 C 58.013 34.04 56.672 39.069 54.114 43.5 C 53.286 44.934 51.451 45.426 50.017 44.597 C 48.582 43.769 48.091 41.934 48.919 40.5 C 50.948 36.986 52.011 32.997 52 28.939 C 51.989 24.882 50.906 20.898 48.858 17.395 C 47.426 14.945 45.558 12.791 43.356 11.033 C 44.555 10.709 45.63 9.93 46.3 8.77 C 46.763 7.967 46.971 7.087 46.95 6.223 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.500,-0.866,-0.866,-0.500,43.125,10.211)",
          transformOrigin: "0 0",
          width: 5.67,
          height: 5.67,
          borderRadius: "50%",
          backgroundColor: "rgb(255,255,255)",
        }} />
        <span style={{
          position: "absolute",
          left: 32.5,
          top: 44.387,
          width: 14,
          height: 13,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 11,
          lineHeight: "100%",
          color: "rgb(255,255,255)",
        }}>{props.maxValue}</span>
        <span style={{
          position: "absolute",
          left: 10.5,
          top: 44.387,
          width: 15,
          height: 13,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 11,
          lineHeight: "100%",
          color: "rgb(255,255,255)",
        }}>{props.minValue}</span>
        <span style={{
          position: "absolute",
          left: 14,
          top: 12.667,
          width: 29,
          height: 29,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 24,
          lineHeight: "100%",
          color: "rgb(255,255,255)",
        }}>{props.value}</span>
      </div>
    </div>
  );
}
export default LockScreenWidgetCircularOpen;
