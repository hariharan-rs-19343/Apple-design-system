import { MacShortcuts } from './MacShortcuts.jsx';

const FONT = "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif";

// figma node: 121:12600 _Menu Item (14 variants)
export function MacMenuItem(_p = {}) {
  const type = _p.type ?? "action";
  const state = _p.state ?? "idle";
  const sel = _p.menuHasSelection ?? false;
  const showCheckmark = _p.showCheckmark ?? true;
  const showSymbol = _p.showSymbol ?? true;
  const showSymbolColumn = _p.showSymbolColumn ?? true;
  const showShortcuts = _p.showShortcuts ?? true;
  const disabled = state === "disabled";
  const blue = state === "hover + key" || (state === "hover" && type === "action");
  const gray = state === "hover" && type === "submenu";
  const fg = disabled ? "rgba(0,0,0,0.25)" : blue ? "rgb(255,255,255)" : "rgb(26,26,26)";
  const txt = { position: "relative", fontFamily: FONT, fontWeight: 510, whiteSpace: "nowrap", lineHeight: 1, color: fg };
  return (
    <div className={_p.className} onClick={disabled ? undefined : _p.onClick} style={{
      width: 160,
      height: "calc(var(--mac-menu-height) * 1px)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      boxSizing: "border-box",
      position: "relative",
      ..._p.style,
    }}>
      {(blue || gray) && (
        <div style={{ position: "absolute", left: -7, right: -7, top: 0, bottom: 0, borderRadius: 8, background: blue ? "rgb(0,136,255)" : "rgba(0,0,0,0.08)" }} />
      )}
      {sel && (
        <span style={{ ...txt, width: 12, marginLeft: 4, flexShrink: 0, textAlign: "center", fontSize: "calc(var(--mac-menu-font-size-symbol) * 1px)" }}>{showCheckmark ? (_p.checkmark ?? "􀆅") : ""}</span>
      )}
      {showSymbolColumn && (
        <span style={{ ...txt, width: "calc(var(--mac-menu-width-symbol) * 1px)", flexShrink: 0, display: "flex", justifyContent: "center", overflow: "visible", fontSize: "calc(var(--mac-menu-font-size-symbol) * 1px)" }}>{showSymbol ? (_p.symbol ?? "􀉁") : ""}</span>
      )}
      <span style={{ ...txt, flex: "1 1 auto", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", fontSize: "calc(var(--mac-menu-font-size) * 1px)" }}>{_p.label ?? "Label"}</span>
      {type === "submenu" ? (
        <span style={{ ...txt, flexShrink: 0, fontWeight: 700, fontSize: "calc(var(--mac-menu-font-size) * 1px)" }}>{_p.text1 ?? "􀆊"}</span>
      ) : showShortcuts ? (
        <MacShortcuts {..._p.shortcut} state={blue ? "hover" : disabled ? "disabled" : "idle"} style={{ position: "relative", flexShrink: 0 }} />
      ) : null}
    </div>
  );
}
export default MacMenuItem;
