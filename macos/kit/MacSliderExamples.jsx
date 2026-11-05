import { MacDialCircularSlider } from './MacDialCircularSlider.jsx';

// figma node: 293:1110 Examples — dials at every control size (columns) × idle / clicked / disabled (rows)
const MAC_DIAL_EX_COLS = [["mini", 53], ["small", 91], ["medium", 129], ["large", 167], ["xlarge", 213]];
const MAC_DIAL_EX_ROWS = [["idle", 53], ["clicked", 95], ["disabled", 137]];

export function MacSliderExamples(_p = {}) {
  return (
    <div className={_p.className} style={{
      width: 290,
      height: 220,
      borderRadius: 2,
      backgroundColor: "rgb(236,235,235)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
      position: "relative",
      ..._p.style,
    }}>
      {MAC_DIAL_EX_ROWS.map(([state, top]) => MAC_DIAL_EX_COLS.map(([size, left]) => (
        <MacDialCircularSlider key={state + size} size={size} state={state} style={{ position: "absolute", left, top }} />
      )))}
    </div>
  );
}
export default MacSliderExamples;
