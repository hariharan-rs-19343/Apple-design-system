// figma node: 5551:18479 Overlay
export function Overlay2(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      backgroundColor: "rgba(0,0,0,0.2)",
      position: "relative",
      ...props.style,
    }} />
  );
}
export default Overlay2;
