import { MacDialCircularSlider } from './MacDialCircularSlider.jsx';

// figma node: 121:12062 Dial — specimen: idle, clicked, disabled (medium, 24pt)
export function MacDial(_p = {}) {
  const size = _p.size ?? "medium";
  return (
    <div className={_p.className} style={{
      width: 160,
      height: 230,
      borderRadius: 2,
      backgroundColor: "var(--mac-section-fill)",
      boxShadow: "inset 0 0 0 1px var(--mac-section-stroke)",
      position: "relative",
      ..._p.style,
    }}>
      <div style={{ position: "absolute", left: 50, top: 50, width: 60, height: 140, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 20, gap: 17, boxSizing: "border-box" }}>
        <MacDialCircularSlider size={size} state="idle" />
        <MacDialCircularSlider size={size} state="clicked" />
        <MacDialCircularSlider size={size} state="disabled" />
      </div>
    </div>
  );
}
export default MacDial;
