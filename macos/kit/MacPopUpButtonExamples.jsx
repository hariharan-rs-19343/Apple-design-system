import { MacPopUpButton } from './MacPopUpButton.jsx';
import { MacPulldownButton } from './MacPulldownButton.jsx';

const COLS = [["mini", 50], ["small", 180], ["medium", 310], ["large", 440], ["xl", 570]];
const ROWS = ["idle", "clicked", "disabled"];

// figma node: 483:6064 Examples — pop-up and pull-down buttons in every size mode and state
export function MacPopUpButtonExamples(_p = {}) {
  return (
    <div className={_p.className} style={{
      width: 710,
      height: 350,
      borderRadius: 2,
      backgroundColor: "rgb(236,235,235)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
      position: "relative",
      ..._p.style,
    }}>
      {COLS.map(([size, left]) => ROWS.map((state, i) => (
        <MacPopUpButton key={"u" + size + state} size={size} state={state} style={{ position: "absolute", left, top: 50 + i * 40 }} />
      )))}
      {COLS.map(([size, left]) => ROWS.map((state, i) => (
        <MacPulldownButton key={"d" + size + state} size={size} state={state} style={{ position: "absolute", left, top: 196 + i * 40 }} />
      )))}
    </div>
  );
}
export default MacPopUpButtonExamples;
