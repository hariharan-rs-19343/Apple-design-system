import { macModeVars } from './MacMode.jsx';
import { MacMenuBG } from './MacMenuBG.jsx';
import { MacMenuItem } from './MacMenuItem.jsx';
import { MacPopUpButton } from './MacPopUpButton.jsx';
import { MacPulldownButton } from './MacPulldownButton.jsx';

const ITEMS = [
  ["Item One", true], ["Item Two", false, "hover"], ["Item Three", true], ["Item Four", false], ["Item Five", false],
  ["Item Six", true], ["Item Seven", false], ["Item Eight", true], ["Item Nine", true],
];
const row = { width: "auto", alignSelf: "stretch", flexShrink: 0 };

function Menu({ left, width, selection }) {
  return (
    <div style={{ position: "absolute", left, top: 80, width, height: 226, padding: "5px 12px", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
      <MacMenuBG style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }} />
      {ITEMS.map(([label, checked, state]) => (
        <MacMenuItem key={label} label={label} state={state ?? "idle"} menuHasSelection={selection} showCheckmark={checked} showSymbolColumn={false} showShortcuts={false} style={row} />
      ))}
    </div>
  );
}

// figma node: 121:11977 Pop-Up Buttons and Pull-Down Buttons (medium size mode)
export function MacPopUpButtonsAndPull(_p = {}) {
  return (
    <div className={_p.className} style={{
      ...macModeVars("medium"),
      width: 400,
      height: 560,
      borderRadius: 2,
      backgroundColor: "var(--mac-section-fill)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.4)",
      position: "relative",
      ..._p.style,
    }}>
      <MacPopUpButton label="Item One" width={102} style={{ position: "absolute", left: 50, top: 50 }} />
      <MacPulldownButton label="Label" style={{ position: "absolute", left: 210, top: 50 }} />
      <Menu left={50} width={117} selection={true} />
      <Menu left={210} width={95} selection={false} />
      {["idle", "clicked", "disabled"].map((state, i) => (
        <MacPopUpButton key={"u" + state} state={state} style={{ position: "absolute", left: 70, top: 380 + i * 40 }} />
      ))}
      {["idle", "clicked", "disabled"].map((state, i) => (
        <MacPulldownButton key={"d" + state} state={state} style={{ position: "absolute", left: 240, top: 380 + i * 40 }} />
      ))}
    </div>
  );
}
export default MacPopUpButtonsAndPull;
