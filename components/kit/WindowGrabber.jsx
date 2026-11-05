// figma node: 555:15031 Window Grabber
export function WindowGrabber(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "9.500px 9.500px 9.500px 9.500px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 5,
        borderRadius: "50%",
        backgroundColor: "rgba(255,255,255,0.4)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        width: 5,
        borderRadius: "50%",
        backgroundColor: "rgba(255,255,255,0.4)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        width: 5,
        borderRadius: "50%",
        backgroundColor: "rgba(255,255,255,0.4)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
}
export default WindowGrabber;
