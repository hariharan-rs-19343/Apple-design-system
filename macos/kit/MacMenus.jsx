import { macModeVars } from './MacMode.jsx';
import { MacMenuBG } from './MacMenuBG.jsx';
import { MacMenuHeader } from './MacMenuHeader.jsx';
import { MacMenuItem } from './MacMenuItem.jsx';
import { MacSeparator } from './MacSeparator.jsx';
import { MacShortcuts } from './MacShortcuts.jsx';

const CMD = { showControl: false, showOption: false, showShift: false };
const row = { width: "auto", alignSelf: "stretch", flexShrink: 0 };
const EDIT_MENU = [
  { label: "Undo", symbol: "􀱍", shortcut: { ...CMD, letter: "Z" } },
  { label: "Redo", symbol: "􀱓", shortcut: { ...CMD, showShift: true, letter: "Z" } },
  "sep",
  { label: "Paste", symbol: "􀉃", shortcut: { ...CMD, letter: "V" } },
  { label: "Paste and Match Style", symbol: "􀉃", state: "hover", shortcut: { ...CMD, showOption: true, showShift: true, letter: "V" } },
  { label: "Delete", symbol: "􀈑", shortcut: { ...CMD, letter: "⌫" } },
  { label: "Select All", symbol: "􀅶", shortcut: { ...CMD, letter: "A" } },
  { label: "Paste as Quotation", showSymbol: false, shortcut: { ...CMD, showShift: true, letter: "V" } },
  { label: "Add Link", showSymbol: false, state: "disabled", shortcut: { ...CMD, letter: "K" } },
  "sep",
  { label: "Find", type: "submenu" },
  "sep",
  "header",
  { label: "Dictation", showSymbol: false, showShortcuts: false },
  { label: "Emoji", symbol: "􀎸", showShortcuts: false },
];
const GROUPS = [
  { top: 440, type: "action", sel: false, states: ["idle", "hover", "disabled"] },
  { top: 550, type: "action", sel: true, states: ["idle", "hover", "disabled"] },
  { top: 660, type: "submenu", sel: false, states: ["idle", "hover + key", "hover", "disabled"] },
  { top: 800, type: "submenu", sel: true, states: ["idle", "hover + key", "hover", "disabled"] },
];

// figma node: 121:12539 Menus (medium size mode)
export function MacMenus(_p = {}) {
  return (
    <div className={_p.className} style={{
      ...macModeVars("medium"),
      width: 340,
      height: 1420,
      borderRadius: 2,
      backgroundColor: "var(--mac-section-fill)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.4)",
      position: "relative",
      ..._p.style,
    }}>
      <div style={{ position: "absolute", left: 50, top: 50, width: 250, height: 328, padding: "5px 12px", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <MacMenuBG style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }} />
        {EDIT_MENU.map((it, i) =>
          it === "sep" ? <MacSeparator key={i} style={{ ...row, height: 11 }} /> :
          it === "header" ? <MacMenuHeader key={i} style={row} /> :
          <MacMenuItem key={i} {...it} style={row} />
        )}
      </div>
      {GROUPS.map((g) => g.states.map((state, i) => (
        <MacMenuItem key={g.top + state} type={g.type} menuHasSelection={g.sel} state={state} shortcut={{ ...CMD, letter: "A" }} style={{ position: "absolute", left: 70, top: g.top + i * 30 }} />
      )))}
      {["idle", "hover", "disabled"].map((state, i) => (
        <MacShortcuts key={state} state={state} style={{ position: "absolute", left: 70, top: 989 + i * 20 }} />
      ))}
      <MacSeparator style={{ position: "absolute", left: 50, top: 1120 }} />
      <MacMenuHeader style={{ position: "absolute", left: 50, top: 1161 }} />
      <MacMenuBG style={{ position: "absolute", left: 50, top: 1220 }} />
    </div>
  );
}
export default MacMenus;
