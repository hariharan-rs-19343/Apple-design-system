// figma node: 5846:3358 Overlay
export function Overlay3(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      backgroundColor: "rgba(0,0,0,0.2)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 220,
        height: 200,
      }} />
    </div>
  );
}
export default Overlay3;
