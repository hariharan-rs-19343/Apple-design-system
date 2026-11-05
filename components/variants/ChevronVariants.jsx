// Named exports for every Figma variant of Chevron
import { Chevron } from '../../components/controls/Chevron.jsx';
// figma: Mode=Dark Elevated
export function ChevronModeDarkElevated(p = {}) { return <Chevron {...{"mode":"dark elevated"}} {...p} />; }
// figma: Mode=Dark
export function ChevronModeDark(p = {}) { return <Chevron {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function ChevronModeLight(p = {}) { return <Chevron {...{"mode":"light"}} {...p} />; }
const __all = [ChevronModeDarkElevated, ChevronModeDark, ChevronModeLight];
export function ChevronVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ChevronVariants;
