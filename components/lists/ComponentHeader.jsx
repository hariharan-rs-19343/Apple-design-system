// figma node: 507:29149 _Component Header
export function ComponentHeader(_p = {}) {
  const props = { ..._p, componentName: _p.componentName ?? "Component name", showDescription: _p.showDescription ?? true, link2: _p.link2 ?? "Human Interface Guidelines", description: _p.description ?? "Description", showLink2: _p.showLink2 ?? false, showLink1: _p.showLink1 ?? true, link1: _p.link1 ?? "Human Interface Guidelines" };
  return (
    <div className={props.className} style={{
      width: 1800,
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
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 56,
        whiteSpace: "nowrap",
        lineHeight: "60px",
        letterSpacing: "-0.280px",
        color: "rgb(0,0,0)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.componentName}</span>
      {props.showDescription && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 28,
        lineHeight: "34px",
        color: "rgb(0,0,0)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.description}</span>
      )}
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
        {props.showLink1 && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 28,
          whiteSpace: "nowrap",
          lineHeight: "34px",
          color: "rgb(0,136,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.link1}</span>
        )}
        {props.showLink2 && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 28,
          lineHeight: "34px",
          color: "var(--accents-blue)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.link2}</span>
        )}
      </div>
    </div>
  );
}
export default ComponentHeader;
