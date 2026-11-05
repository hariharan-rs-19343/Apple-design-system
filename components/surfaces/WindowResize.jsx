// figma node: 5589:4090 _Window Resize
export function WindowResize(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 65,
      height: 65,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 4.75,
        top: 4.75,
        width: 55.5,
        height: 55.5,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 1.500px var(--miscellaneous-window-grabber), 0 0 0 1.500px var(--miscellaneous-window-grabber)",
      }} />
    </div>
  );
}
export default WindowResize;
