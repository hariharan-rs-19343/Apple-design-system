// figma node: 650:5930 Window Title/Utility
export function MacWindowTitleUtility(_p = {}) {
  const props = { ..._p, showSymbol: _p.showSymbol ?? true };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showSymbol && (
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 13,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(0,0,0,0.5)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "􀈕"}</span>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "Title"}</span>
    </div>
  );
}
export default MacWindowTitleUtility;
