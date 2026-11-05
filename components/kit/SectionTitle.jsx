// figma node: 50:56535 Section Title
export function SectionTitle(_p = {}) {
  const props = { ..._p, text: _p.text ?? "A" };
  return (
    <div className={props.className} style={{
      width: 300,
      backdropFilter: "blur(100px)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 16px 0px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 0px 9px 0px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
        }}>{props.text}</span>
      </div>
    </div>
  );
}
export default SectionTitle;
