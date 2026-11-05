// Named exports for every Figma variant of ModeLabel
import { ModeLabel } from '../../components/labels/ModeLabel.jsx';
// figma: Mode=Light
export function ModeLabelModeLight(p = {}) { return <ModeLabel {...{"mode":"light"}} {...p} />; }
// figma: Mode=Dark
export function ModeLabelModeDark(p = {}) { return <ModeLabel {...{"mode":"dark"}} {...p} />; }
const __all = [ModeLabelModeLight, ModeLabelModeDark];
export function ModeLabelVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ModeLabelVariants;
