// Named exports for every Figma variant of LaunchPad
import { LaunchPad } from '../../components/labels/LaunchPad.jsx';
// figma: Mode=Dark
export function LaunchPadModeDark(p = {}) { return <LaunchPad {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function LaunchPadModeLight(p = {}) { return <LaunchPad {...{"mode":"light"}} {...p} />; }
const __all = [LaunchPadModeDark, LaunchPadModeLight];
export function LaunchPadVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default LaunchPadVariants;
