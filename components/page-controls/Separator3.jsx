// figma node: 9:58578 _Separator
export function Separator3(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 100,
      height: 0.333,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 100,
        height: 0.333,
        backgroundColor: "rgb(217,217,217)",
      }} />
    </div>
  );
}
export default Separator3;
