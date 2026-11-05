// figma node: 5428:5456 _Track
export function Track(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 282,
      height: 6,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 282,
        height: 6,
        borderRadius: 3,
        backgroundColor: "rgba(120,120,120,0.2)",
      }} />
    </div>
  );
}
export default Track;
