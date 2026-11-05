// figma node: 483:7601 _Shortcuts (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function MacShortcuts(_p = {}) {
  const props = { ..._p, state: _p.state ?? "idle", showControl: _p.showControl ?? true, letter: _p.letter ?? "A", showOption: _p.showOption ?? true, showCommand: _p.showCommand ?? true, showShift: _p.showShift ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showControl && (
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-menu-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "􀆍"}</span>
      )}
      {props.showOption && (
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-menu-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "􀆕"}</span>
      )}
      {props.showShift && (
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-menu-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text3 ?? "􀆝"}</span>
      )}
      {props.showCommand && (
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-menu-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "􀆔"}</span>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-menu-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.letter}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showControl && (
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-menu-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "􀆍"}</span>
      )}
      {props.showOption && (
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-menu-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "􀆕"}</span>
      )}
      {props.showShift && (
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-menu-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text3 ?? "􀆝"}</span>
      )}
      {props.showCommand && (
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-menu-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "􀆔"}</span>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-menu-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.letter}</span>
    </div>
  );
  const __impls = {
    // figma: State=Disabled
    "state=disabled": __body0,
    // figma: State=Hover
    "state=hover": __body1,
    // figma: State=Idle
    "state=idle": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default MacShortcuts;
