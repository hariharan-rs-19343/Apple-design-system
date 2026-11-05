// Named exports for every Figma variant of ResizeIndicator
import { ResizeIndicator } from '../../components/pickers/ResizeIndicator.jsx';
// figma: Mode=Dark Elevated
export function ResizeIndicatorModeDarkElevated(p = {}) { return <ResizeIndicator {...{"mode":"dark elevated"}} {...p} />; }
// figma: Mode=Dark
export function ResizeIndicatorModeDark(p = {}) { return <ResizeIndicator {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function ResizeIndicatorModeLight(p = {}) { return <ResizeIndicator {...{"mode":"light"}} {...p} />; }
const __all = [ResizeIndicatorModeDarkElevated, ResizeIndicatorModeDark, ResizeIndicatorModeLight];
export function ResizeIndicatorVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ResizeIndicatorVariants;
