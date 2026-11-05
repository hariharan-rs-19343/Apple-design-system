// figma node: 553:23065 Row - Text Field/Value Entered
export function RowTextFieldValueEntered(_p = {}) {
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
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 17,
          lineHeight: "20px",
          letterSpacing: "-0.430px",
          color: "var(--labels-primary)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.value}</span>
      </div>
    </div>
  );
}
export default RowTextFieldValueEntered;
