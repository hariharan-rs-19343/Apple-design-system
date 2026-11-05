// figma node: 128:76929 Context Menu - Dimming Overlay
export function ContextMenuDimmingOverlay(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 200,
      height: 200,
      backgroundColor: "rgba(0,0,0,0.23)",
      position: "relative",
      ...props.style,
    }} />
  );
}
export default ContextMenuDimmingOverlay;
