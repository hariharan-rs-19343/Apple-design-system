// figma node: 507:29149 _Component Header
export function WatchComponentHeader(_p = {}) {
  const props = { ..._p, componentName: _p.componentName ?? "Component name", showDescription: _p.showDescription ?? true, link2: _p.link2 ?? "Human Interface Guidelines", description: _p.description ?? "Description", showLink2: _p.showLink2 ?? false, showLink1: _p.showLink1 ?? true, link1: _p.link1 ?? "Human Interface Guidelines" };
  return (
    <div className={props.className} style={{
      width: 2000,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 52,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "56px",
        letterSpacing: "0.310px",
        color: "var(--watch-text-colors-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.componentName}</span>
      {props.showDescription && (
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 32,
        lineHeight: "34px",
        letterSpacing: "0.410px",
        color: "rgba(242,244,252,0.5)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.description}</span>
      )}
      <div style={{
        position: "relative",
        height: 60,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "26px 0px 26px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showLink1 && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 34,
          lineHeight: "34px",
          letterSpacing: "0.410px",
          color: "var(--watch-colors-blue)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.link1}</span>
        )}
        {props.showLink2 && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 34,
          lineHeight: "34px",
          letterSpacing: "0.410px",
          color: "var(--watch-colors-blue)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.link2}</span>
        )}
      </div>
    </div>
  );
}
export default WatchComponentHeader;
