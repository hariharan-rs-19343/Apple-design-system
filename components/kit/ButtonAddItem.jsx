// figma node: 131:70642 Button - Add Item
export function ButtonAddItem(_p = {}) {
  const props = { ..._p, title: _p.title ?? "Title" };
  return (
    <div className={props.className} style={{
      width: 320,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 24px 8px 24px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        borderRadius: 3,
        backgroundColor: "rgba(118,118,128,0.12)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 28,
          height: 28,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "var(--accents-blue)",
        }}>{props.text1 ?? "􀅼"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "19px",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
        flexShrink: 0,
      }}>{props.title}</span>
    </div>
  );
}
export default ButtonAddItem;
