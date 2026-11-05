// Named exports for every Figma variant of Separator
import { Separator } from '../../components/lists/Separator.jsx';
// figma: Mode=Dark
export function SeparatorModeDark(p = {}) { return <Separator {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function SeparatorModeLight(p = {}) { return <Separator {...{"mode":"light"}} {...p} />; }
const __all = [SeparatorModeDark, SeparatorModeLight];
export function SeparatorVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SeparatorVariants;
