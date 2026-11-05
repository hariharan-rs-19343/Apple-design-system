// Named exports for every Figma variant of Lollipops
import { Lollipops } from '../../components/labels/Lollipops.jsx';
// figma: Mode=Dark Elevated
export function LollipopsModeDarkElevated(p = {}) { return <Lollipops {...{"mode":"dark elevated"}} {...p} />; }
// figma: Mode=Dark
export function LollipopsModeDark(p = {}) { return <Lollipops {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function LollipopsModeLight(p = {}) { return <Lollipops {...{"mode":"light"}} {...p} />; }
const __all = [LollipopsModeDarkElevated, LollipopsModeDark, LollipopsModeLight];
export function LollipopsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default LollipopsVariants;
