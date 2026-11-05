// figma node: 453:3362 Header
export function MacHeader(_p = {}) {
  const props = { ..._p, showLink2: _p.showLink2 ?? false, component: _p.component ?? "Component", description: _p.description ?? "Description" };
  return (
    <div className={props.className} style={{
      width: 1400,
      display: "flex",
      flexDirection: "column",
      gap: 32,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 56,
        whiteSpace: "nowrap",
        lineHeight: "60px",
        letterSpacing: "-0.280px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.component}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 28,
        lineHeight: "34px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.description}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: "8px 0px 8px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 28,
          whiteSpace: "nowrap",
          lineHeight: "34px",
          color: "var(--mac-colors-blue)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Human Interface Guidelines 􀄫"}</span>
        {props.showLink2 && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 28,
          lineHeight: "34px",
          color: "var(--mac-colors-blue)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Human Interface Guidelines"}</span>
        )}
      </div>
    </div>
  );
}
export default MacHeader;
