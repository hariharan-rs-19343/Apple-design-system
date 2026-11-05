import { Lollipops } from '../labels/Lollipops.jsx';

// figma node: 0:5797 Text Selection
export function TextSelection(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 35,
      height: 24,
      backgroundColor: "rgba(80,156,254,0.2)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 35,
          height: 24,
        }}>{props.icon1 ?? <Lollipops mode={"light"} />}</div>
    </div>
  );
}
export default TextSelection;
