// figma node: 8745:523 Light
export function Light(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 72,
      display: "flex",
      flexDirection: "column",
      gap: 1,
      padding: "6px 8px 7px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 68,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 18,
          textAlign: "center",
          lineHeight: "28px",
          color: "rgb(255,0,0)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "􀋃"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 10,
          textAlign: "center",
          lineHeight: "12px",
          letterSpacing: "-0.100px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Label"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 72,
        height: 54,
        backgroundColor: "rgba(255,255,255,0.5)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 72,
        height: 54,
        backgroundColor: "var(--accents-blue)",
      }} />
    </div>
  );
}
export default Light;
