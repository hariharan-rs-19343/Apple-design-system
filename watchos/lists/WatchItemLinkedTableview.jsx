// figma node: 6442:4783 Item - Linked Tableview
export function WatchItemLinkedTableview(_p = {}) {
  const props = { ..._p, showCheckmark: _p.showCheckmark ?? true, label: _p.label ?? "Label" };
  return (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      minHeight: 43.5,
      background: "linear-gradient(rgb(108,108,108),rgb(108,108,108)), linear-gradient(rgb(153,153,153),rgb(153,153,153)), linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2)), linear-gradient(rgba(204,204,204,0.1),rgba(204,204,204,0.1))",
      backdropFilter: "blur(25px)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "4px 7.500px 4.500px 7.500px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-copy-safe-area-list) * 1px)",
      paddingTop: "calc(var(--watch-list-margin-top) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-copy-safe-area-list) * 1px)",
      paddingBottom: "calc(var(--watch-list-margin-bottom) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--watch-list-font-size) * 1px)",
        lineHeight: "18px",
        color: "rgb(255,255,255)",
        flexGrow: 1,
      }}>{props.label}</span>
      {props.showCheckmark && (
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--watch-list-font-size) * 1px)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18px",
        color: "rgb(4,222,113)",
        flexShrink: 0,
      }}>{props.text1 ?? "􀆅"}</span>
      )}
    </div>
  );
}
export default WatchItemLinkedTableview;
