import { macModeVars } from './MacMode.jsx';

const FONT = "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif";
const BG = { idle: "rgba(0,0,0,0.05)", clicked: "rgba(0,0,0,0.15)", disabled: "rgba(0,0,0,0.025)" };
const FG = { idle: "rgba(0,0,0,0.85)", clicked: "rgba(0,0,0,0.85)", disabled: "rgba(0,0,0,0.25)" };

// Shared by MacPopUpButton and MacPulldownButton. Sizes follow the kit's size modes
// (--mac-global-height / --mac-button-radius / --mac-global-font-size / --mac-popup-*), set by the size prop or a parent MacMode.
export function popUpBase(_p, glyph) {
  const state = BG[_p.state] ? _p.state : "idle";
  const fg = FG[state];
  return (
    <div
      role="button"
      aria-disabled={state === "disabled" || undefined}
      className={_p.className}
      onClick={state === "disabled" ? undefined : _p.onClick}
      style={{
        ...(_p.size ? macModeVars(_p.size) : {}),
        width: _p.width ?? 100,
        height: "calc(var(--mac-global-height) * 1px)",
        borderRadius: "calc(var(--mac-button-radius) * 1px)",
        background: BG[state],
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        paddingLeft: "calc(var(--mac-popup-inset-left) * 1px)",
        paddingRight: "calc(var(--mac-popup-inset-left) * 1px)",
        boxSizing: "border-box",
        cursor: state === "disabled" ? "default" : "pointer",
        fontFamily: FONT,
        position: "relative",
        ..._p.style,
      }}
    >
      <span style={{ flex: "1 1 auto", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontWeight: 510, fontSize: "calc(var(--mac-global-font-size) * 1px)", lineHeight: 1, color: fg }}>{_p.label ?? "Label"}</span>
      <span style={{ flexShrink: 0, fontWeight: 700, fontSize: "calc(var(--mac-popup-font-size-chevron) * 1px)", lineHeight: 1, textAlign: "center", color: fg }}>{_p.text1 ?? glyph}</span>
    </div>
  );
}

// figma node: 121:11978 Pop-Up Button (3 variants)
export function MacPopUpButton(_p = {}) {
  return popUpBase(_p, "􀆏");
}
export default MacPopUpButton;
