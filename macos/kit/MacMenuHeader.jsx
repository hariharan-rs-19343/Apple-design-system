// figma node: 483:8680 Header
export function MacMenuHeader(_p = {}) {
  const props = { ..._p, header: _p.header ?? "Header" };
  return (
    <div className={props.className} style={{
      width: 194,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "5px 18px 4px 18px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-menu-inset-left-header) * 1px)",
      paddingTop: "calc(var(--mac-menu-inset-top-header) * 1px)",
      paddingBottom: "calc(var(--mac-menu-inset-bottom-header) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-secondary)",
        flexShrink: 0,
      }}>{props.header}</span>
    </div>
  );
}
export default MacMenuHeader;
