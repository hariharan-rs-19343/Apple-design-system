// Named exports for every Figma variant of BG
import { BG } from '../../components/backgrounds/BG.jsx';
// figma: Mode=Dark Elevated
export function BGModeDarkElevated(p = {}) { return <BG {...{"mode":"dark elevated"}} {...p} />; }
// figma: Mode=Dark
export function BGModeDark(p = {}) { return <BG {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function BGModeLight(p = {}) { return <BG {...{"mode":"light"}} {...p} />; }
const __all = [BGModeDarkElevated, BGModeDark, BGModeLight];
export function BGVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default BGVariants;
