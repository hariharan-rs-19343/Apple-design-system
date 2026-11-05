// figma node: 517:38061 Header
export function WatchHeader(_p = {}) {
  const props = { ..._p, text: _p.text ?? "Section Header" };
  return (
    <div className={props.className} style={{
      width: 162,
      display: "flex",
      flexDirection: "column",
      padding: "0px 9.500px 0px 9.500px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--watch-list-font-size-header) * 1px)",
        lineHeight: "15.500px",
        color: "var(--watch-text-colors-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text}</span>
    </div>
  );
}
export default WatchHeader;
