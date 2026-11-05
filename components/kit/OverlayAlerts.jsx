// figma node: 5446:7633 Overlay - Alerts
export function OverlayAlerts(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 160,
      height: 160,
      backgroundColor: "rgba(41,41,58,0.23)",
      position: "relative",
      ...props.style,
    }} />
  );
}
export default OverlayAlerts;
