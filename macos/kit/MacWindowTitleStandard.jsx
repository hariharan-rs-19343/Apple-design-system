// figma node: 177:11506 Window Title/Standard
export function MacWindowTitleStandard(_p = {}) {
  const props = { ..._p, showSubtitle: _p.showSubtitle ?? false, symbol: _p.symbol ?? "􀈕", title: _p.title ?? "Title", subtitle: _p.subtitle ?? "Subtitle", showSymbol: _p.showSymbol ?? true };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showSymbol && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 15,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "rgba(0,0,0,0.5)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
        }}>{props.title}</span>
      </div>
      {props.showSubtitle && (
      <div style={{
        position: "relative",
        width: 91,
        height: 13,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.showSubtitle && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(153,153,153)",
          flexShrink: 0,
        }}>{props.subtitle}</span>
        )}
        {props.showSubtitle && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(153,153,153)",
          flexShrink: 0,
        }}>{props.text1 ?? "— Edited"}</span>
        )}
      </div>
      )}
    </div>
  );
}
export default MacWindowTitleStandard;
