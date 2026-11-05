// figma node: 553:23055 Row - Text Field/Focused
export function RowTextFieldFocused(_p = {}) {
  const props = { ..._p, value: _p.value ?? "Placeholder", title: _p.title ?? "Title" };
  return (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "14px 16px 14px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "var(--labels-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.title}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 2,
            borderRadius: 10,
            backgroundColor: "var(--accents-blue)",
            flexShrink: 0,
            alignSelf: "stretch",
          }} />
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 17,
            lineHeight: "20px",
            letterSpacing: "-0.430px",
            color: "rgba(60,60,67,0.3)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.value}</span>
        </div>
      </div>
    </div>
  );
}
export default RowTextFieldFocused;
