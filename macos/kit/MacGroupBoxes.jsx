// figma node: 121:11263 Group Boxes
export function MacGroupBoxes(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 300,
      height: 310,
      borderRadius: 2,
      backgroundColor: "var(--mac-section-fill)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.4)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 50,
        top: 50,
        width: 200,
        height: 200,
        opacity: 0.5,
        borderRadius: 12,
        backgroundColor: "rgba(0,0,0,0.03)",
      }} />
    </div>
  );
}
export default MacGroupBoxes;
