// Named exports for every Figma variant of SelectionBG
import { SelectionBG } from '../../components/segmented-controls/SelectionBG.jsx';
// figma: Mode=Dark
export function SelectionBGModeDark(p = {}) { return <SelectionBG {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function SelectionBGModeLight(p = {}) { return <SelectionBG {...{"mode":"light"}} {...p} />; }
const __all = [SelectionBGModeDark, SelectionBGModeLight];
export function SelectionBGVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SelectionBGVariants;
