// figma node: 5441:3942 _Fill
export function Fill(_p = {}) {
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
        backgroundColor: "var(--accents-blue)",
      }} />
    </div>
  );
}
export default Fill;
