// Named exports for every Figma variant of Separators
import { Separators } from '../../components/segmented-controls/Separators.jsx';
// figma: Mode=Dark Elevated
export function SeparatorsModeDarkElevated(p = {}) { return <Separators {...{"mode":"dark elevated"}} {...p} />; }
// figma: Mode=Dark
export function SeparatorsModeDark(p = {}) { return <Separators {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function SeparatorsModeLight(p = {}) { return <Separators {...{"mode":"light"}} {...p} />; }
const __all = [SeparatorsModeDarkElevated, SeparatorsModeDark, SeparatorsModeLight];
export function SeparatorsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SeparatorsVariants;
