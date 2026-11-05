// figma node: 520:49468 _Knob
export function Knob(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 2,
      height: 24,
      borderRadius: 100,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: -18,
        top: 0,
        width: 38,
        height: 24,
        borderRadius: 100,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "0px 0.500px 4px 0px rgba(0,0,0,0.12), 0px 6px 13px 0px rgba(0,0,0,0.12)",
      }} />
    </div>
  );
}
export default Knob;
