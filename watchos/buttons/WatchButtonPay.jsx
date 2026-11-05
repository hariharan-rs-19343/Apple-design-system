// figma node: 6417:4274 Button - Pay (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size);

export function WatchButtonPay(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Buy with", size: _p.size ?? "sm" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--watch-colors-white-system)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 88,
        borderRadius: 10,
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "13px 6px 13px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--watch-button-margin-t) * 1px)",
        paddingBottom: "calc(var(--watch-button-margin-b) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={46.001} viewBox="0 0 46.001 19" fill="none" style={{
          position: "relative",
          width: 46.001,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 9.441 0 C 9.491 0.9 9.171 1.81 8.581 2.45 C 8.061 3.14 7.161 3.68 6.321 3.58 C 6.141 2.67 6.631 1.76 7.101 1.18 C 7.681 0.48 8.631 0.01 9.431 0.01 L 9.441 0 Z M 21.681 3.89 L 19.121 3.89 L 19.121 8.84 L 20.891 8.84 C 22.921 8.84 24.121 8.34 24.121 6.36 C 24.121 4.79 23.211 3.89 21.671 3.89 L 21.681 3.89 Z M 33.381 10.84 L 31.151 10.84 C 29.901 10.84 29.331 11.44 29.331 12.29 C 29.331 13.36 30.221 13.88 31.171 13.88 C 32.421 13.88 33.381 13.1 33.381 11.98 L 33.381 10.84 Z M 22.011 2.05 C 24.721 2.05 26.371 3.87 26.371 6.36 C 26.371 8.85 24.701 10.66 22.001 10.66 L 19.121 10.66 L 19.121 15.38 L 16.921 15.38 L 16.921 2.05 L 22.011 2.05 Z M 31.531 4.9 C 33.811 4.9 35.511 6.04 35.511 8.35 L 35.511 15.38 L 33.461 15.38 L 33.461 14.11 L 33.381 14.11 C 32.931 14.9 32.031 15.54 30.521 15.54 C 28.531 15.54 27.161 14.34 27.161 12.42 C 27.161 10.5 28.421 9.42 30.781 9.42 L 33.381 9.42 L 33.381 8.43 C 33.381 7.25 32.681 6.59 31.481 6.59 C 30.281 6.59 29.631 7.2 29.561 8.12 L 27.541 8.12 C 27.631 6.36 28.791 4.9 31.531 4.9 Z M 9.371 3.78 C 9.911 3.78 11.351 3.93 12.251 5.32 C 12.191 5.36 10.541 6.28 10.541 8.31 C 10.611 10.63 12.611 11.44 12.641 11.44 C 12.601 11.48 12.341 12.54 11.551 13.66 C 10.921 14.62 10.221 15.58 9.171 15.58 C 8.121 15.58 7.801 14.94 6.641 14.94 C 5.401 14.94 5.041 15.58 4.091 15.58 C 3.031 15.58 2.281 14.56 1.621 13.61 C 0.761 12.36 0.031 10.41 0.001 8.53 C -0.019 7.54 0.171 6.56 0.651 5.73 C 1.341 4.57 2.551 3.79 3.881 3.76 C 4.891 3.72 5.791 4.45 6.421 4.45 C 7.001 4.45 8.121 3.76 9.371 3.76 L 9.371 3.78 Z M 38.701 5.06 L 41.161 13.26 L 41.231 13.26 L 43.721 5.06 L 46.001 5.06 C 45.561 6.5 42.511 15.21 42.501 15.24 L 42.241 15.95 C 41.401 18.24 40.261 19 38.261 19 C 37.881 19 37.431 18.96 37.121 18.9 L 37.121 17.26 C 37.281 17.29 37.631 17.31 37.911 17.31 C 39.071 17.31 39.631 16.92 39.851 15.9 L 39.981 15.45 L 36.321 5.05 L 38.711 5.05 L 38.701 5.06 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px 0px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--watch-colors-white-system)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 10,
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        display: "flex",
        flexDirection: "row",
        gap: 4.5,
        padding: "13px 6px 13px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--watch-button-margin-t) * 1px)",
        paddingBottom: "calc(var(--watch-button-margin-b) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 556,
          fontSize: "calc(var(--watch-button-font-size) * 1px)",
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18.500px",
          color: "var(--watch-colors-white-system)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.label}</span>
        <svg width={46.001} viewBox="0 0 46.001 19" fill="none" style={{
          position: "relative",
          width: 46.001,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 9.441 0 C 9.491 0.9 9.171 1.81 8.581 2.45 C 8.061 3.14 7.161 3.68 6.321 3.58 C 6.141 2.67 6.631 1.76 7.101 1.18 C 7.681 0.48 8.631 0.01 9.431 0.01 L 9.441 0 Z M 21.681 3.89 L 19.121 3.89 L 19.121 8.84 L 20.891 8.84 C 22.921 8.84 24.121 8.34 24.121 6.36 C 24.121 4.79 23.211 3.89 21.671 3.89 L 21.681 3.89 Z M 33.381 10.84 L 31.151 10.84 C 29.901 10.84 29.331 11.44 29.331 12.29 C 29.331 13.36 30.221 13.88 31.171 13.88 C 32.421 13.88 33.381 13.1 33.381 11.98 L 33.381 10.84 Z M 22.011 2.05 C 24.721 2.05 26.371 3.87 26.371 6.36 C 26.371 8.85 24.701 10.66 22.001 10.66 L 19.121 10.66 L 19.121 15.38 L 16.921 15.38 L 16.921 2.05 L 22.011 2.05 Z M 31.531 4.9 C 33.811 4.9 35.511 6.04 35.511 8.35 L 35.511 15.38 L 33.461 15.38 L 33.461 14.11 L 33.381 14.11 C 32.931 14.9 32.031 15.54 30.521 15.54 C 28.531 15.54 27.161 14.34 27.161 12.42 C 27.161 10.5 28.421 9.42 30.781 9.42 L 33.381 9.42 L 33.381 8.43 C 33.381 7.25 32.681 6.59 31.481 6.59 C 30.281 6.59 29.631 7.2 29.561 8.12 L 27.541 8.12 C 27.631 6.36 28.791 4.9 31.531 4.9 Z M 9.371 3.78 C 9.911 3.78 11.351 3.93 12.251 5.32 C 12.191 5.36 10.541 6.28 10.541 8.31 C 10.611 10.63 12.611 11.44 12.641 11.44 C 12.601 11.48 12.341 12.54 11.551 13.66 C 10.921 14.62 10.221 15.58 9.171 15.58 C 8.121 15.58 7.801 14.94 6.641 14.94 C 5.401 14.94 5.041 15.58 4.091 15.58 C 3.031 15.58 2.281 14.56 1.621 13.61 C 0.761 12.36 0.031 10.41 0.001 8.53 C -0.019 7.54 0.171 6.56 0.651 5.73 C 1.341 4.57 2.551 3.79 3.881 3.76 C 4.891 3.72 5.791 4.45 6.421 4.45 C 7.001 4.45 8.121 3.76 9.371 3.76 L 9.371 3.78 Z M 38.701 5.06 L 41.161 13.26 L 41.231 13.26 L 43.721 5.06 L 46.001 5.06 C 45.561 6.5 42.511 15.21 42.501 15.24 L 42.241 15.95 C 41.401 18.24 40.261 19 38.261 19 C 37.881 19 37.431 18.96 37.121 18.9 L 37.121 17.26 C 37.281 17.29 37.631 17.31 37.911 17.31 C 39.071 17.31 39.631 16.92 39.851 15.9 L 39.981 15.45 L 36.321 5.05 L 38.711 5.05 L 38.701 5.06 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __impls = {
    // figma: Size=Small
    "size=sm": __body0,
    // figma: Size=Full width
    "size=full width": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default WatchButtonPay;
