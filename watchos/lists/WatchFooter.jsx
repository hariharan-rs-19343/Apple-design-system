// figma node: 517:38055 Footer
export function WatchFooter(_p = {}) {
  const props = { ..._p, text: _p.text ?? "Section footer" };
  return (
    <div className={props.className} style={{
      width: 162,
      display: "flex",
      flexDirection: "row",
      padding: "0px 9.500px 0px 9.500px",
      alignItems: "center",
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
        fontWeight: 400,
        fontSize: "calc(var(--watch-list-font-size-footer) * 1px)",
        whiteSpace: "nowrap",
        lineHeight: "14.500px",
        letterSpacing: "-0.230px",
        color: "rgba(242,244,252,0.5)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text}</span>
    </div>
  );
}
export default WatchFooter;
