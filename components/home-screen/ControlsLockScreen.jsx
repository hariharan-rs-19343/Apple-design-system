import { LiquidGlassClearLight } from '../notifications/LiquidGlassClearLight.jsx';

// figma node: 5592:28123 _Controls - Lock Screen
export function ControlsLockScreen(_p = {}) {
  const props = { ..._p, symbol: _p.symbol ?? "􀝌" };
  return (
    <div className={props.className} style={{
      width: 58,
      height: 58,
      borderRadius: 100,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 58,
          height: 58,
        }}>{props.icon1 ?? <LiquidGlassClearLight style={{ transform: "scale(0.362, 0.362)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 58,
        height: 58,
        opacity: 0.9,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 21,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.200px",
        color: "rgb(217,217,217)",
      }}>{props.symbol}</span>
    </div>
  );
}
export default ControlsLockScreen;
