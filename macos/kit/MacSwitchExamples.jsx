import { MacSwitch } from './MacSwitch.jsx';

// figma node: 478:932 Examples — every switch size (mini → XL) across the six states, positions copied from the kit.
const EX_COLS = [["mini", 20], ["small", 70], ["medium", 130], ["large", 200], ["xl", 280]];
const EX_ROWS = [
  [20, "idle", "off"],
  [80, "clicked", "off"],
  [140, "disabeld", "off"],
  [200, "idle", "on"],
  [260, "clicked", "on"],
  [320, "disabeld", "on"],
];
export function MacSwitchExamples(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 390,
      height: 380,
      borderRadius: 2,
      backgroundColor: "rgb(236,235,235)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
      position: "relative",
      ...props.style,
    }}>
      {EX_ROWS.flatMap(([top, state, selection]) => EX_COLS.map(([size, left]) => (
        <MacSwitch key={size + top} size={size} state={state} selection={selection} activeWindow={true}
          style={{ position: "absolute", left, top }} />
      )))}
    </div>
  );
}
export default MacSwitchExamples;
