// Named exports for every Figma variant of Selection
import { Selection } from '../../components/segmented-controls/Selection.jsx';
// figma: Mode=Dark
export function SelectionModeDark(p = {}) { return <Selection {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function SelectionModeLight(p = {}) { return <Selection {...{"mode":"light"}} {...p} />; }
const __all = [SelectionModeDark, SelectionModeLight];
export function SelectionVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SelectionVariants;
