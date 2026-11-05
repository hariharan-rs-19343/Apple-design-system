// Named exports for every Figma variant of Shortcuts
import { Shortcuts } from '../../components/segmented-controls/Shortcuts.jsx';
// figma: Mode=Dark Elevated
export function ShortcutsModeDarkElevated(p = {}) { return <Shortcuts {...{"mode":"dark elevated"}} {...p} />; }
// figma: Mode=Dark
export function ShortcutsModeDark(p = {}) { return <Shortcuts {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function ShortcutsModeLight(p = {}) { return <Shortcuts {...{"mode":"light"}} {...p} />; }
const __all = [ShortcutsModeDarkElevated, ShortcutsModeDark, ShortcutsModeLight];
export function ShortcutsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ShortcutsVariants;
