// figma node: 121:12096 Tooltips
export function MacTooltips(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 200,
      height: 110,
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
        overflow: "hidden",
        borderRadius: 1,
        backgroundColor: "rgba(246,246,246,0.72)",
        backdropFilter: "blur(20px)",
        boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 2px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "13px",
          color: "rgb(77,77,77)",
          flexShrink: 0,
        }}>This is a tooltip.</span>
      </div>
    </div>
  );
}
export default MacTooltips;
