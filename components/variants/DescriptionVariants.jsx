// Named exports for every Figma variant of Description
import { Description } from '../../components/labels/Description.jsx';
// figma: Mode=Dark Elevated
export function DescriptionModeDarkElevated(p = {}) { return <Description {...{"mode":"dark elevated"}} {...p} />; }
// figma: Mode=Dark
export function DescriptionModeDark(p = {}) { return <Description {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function DescriptionModeLight(p = {}) { return <Description {...{"mode":"light"}} {...p} />; }
const __all = [DescriptionModeDarkElevated, DescriptionModeDark, DescriptionModeLight];
export function DescriptionVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default DescriptionVariants;
