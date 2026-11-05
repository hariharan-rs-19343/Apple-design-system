// figma node: 525:43658 Lock Screen Widget / Circular / Open Gauge 3
export function LockScreenWidgetCircularOpen3(_p = {}) {
  const props = { ..._p, number: _p.number ?? "27", label: _p.label ?? "AQI" };
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
        <svg width={58} height={45.469} viewBox="0 0 58 45.469" fill="none" style={{
          position: "absolute",
          left: 0,
          top: -0.193,
          width: 58,
          height: 45.469,
        }}>
          <path d={"M 28.696 0.002 C 32.494 -0.038 36.25 0.669 39.754 2.068 C 38.995 2.482 38.337 3.103 37.873 3.906 C 37.204 5.066 37.067 6.386 37.385 7.586 C 34.647 6.513 31.719 5.97 28.759 6.001 C 24.701 6.043 20.727 7.158 17.24 9.233 C 13.753 11.308 10.877 14.269 8.903 17.814 C 6.93 21.36 5.93 25.365 6.004 29.422 C 6.074 33.225 7.085 36.947 8.943 40.257 L 9.326 40.915 L 9.403 41.048 C 10.156 42.446 9.687 44.203 8.314 45.035 C 6.897 45.893 5.053 45.439 4.194 44.022 C 1.544 39.646 0.099 34.646 0.005 29.531 C -0.089 24.416 1.172 19.366 3.66 14.896 C 6.148 10.426 9.776 6.693 14.173 4.077 C 18.57 1.461 23.58 0.055 28.696 0.002 Z M 46.95 6.224 C 49.792 8.464 52.2 11.223 54.038 14.369 C 56.619 18.786 57.986 23.807 58 28.923 C 58.013 34.04 56.672 39.069 54.114 43.5 C 53.286 44.934 51.451 45.426 50.017 44.597 C 48.582 43.769 48.091 41.934 48.919 40.5 C 50.948 36.986 52.011 32.997 52 28.939 C 51.989 24.882 50.906 20.898 48.858 17.395 C 47.427 14.945 45.558 12.792 43.356 11.034 C 44.555 10.71 45.63 9.931 46.3 8.771 C 46.763 7.968 46.971 7.088 46.95 6.224 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.500,-0.866,-0.866,-0.500,43.125,10.018)",
          transformOrigin: "0 0",
          width: 5.67,
          height: 5.67,
          borderRadius: "50%",
          backgroundColor: "rgb(255,255,255)",
        }} />
        <span style={{
          position: "absolute",
          left: 14,
          top: 44,
          width: 30,
          height: 14,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
        }}>{props.label}</span>
        <span style={{
          position: "absolute",
          left: 15,
          top: 12.5,
          width: 28,
          height: 29,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 24.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "-1px",
          color: "rgb(255,255,255)",
        }}>{props.number}</span>
      </div>
    </div>
  );
}
export default LockScreenWidgetCircularOpen3;
