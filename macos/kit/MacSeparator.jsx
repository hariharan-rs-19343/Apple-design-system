// figma node: 121:12604 Separator
export function MacSeparator(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 194,
      height: 11,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: -1.333,
        top: 5,
        right: -1.333,
        height: 1,
        backgroundColor: "var(--mac-fills-vibrant-use-plus-lighter-darker-secondary)",
      }} />
    </div>
  );
}
export default MacSeparator;
