import { renderTipArrow } from './IOSTipBackgroundAnnotation.jsx';

// figma node: 41:4366 iOS/_Tip Background/Popover (27 variants)
// Resizable: the bubble fills its box (default 80×80, the Figma master); the arrow sits outside it.
export function IOSTipBackgroundPopover(_p = {}) {
  const props = { ..._p, arrow: _p.arrow ?? "up - leading", mode: _p.mode ?? "light" };
  const light = props.mode === "light";
  const fill = light ? "rgb(249,249,249)" : "rgb(38,38,38)";
  return (
    <div className={props.className} style={{
      width: 80,
      height: 80,
      position: "relative",
      filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.12))",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        borderRadius: 20,
        backgroundColor: fill,
      }} />
      {renderTipArrow(props.arrow, fill)}
    </div>
  );
}
export default IOSTipBackgroundPopover;
