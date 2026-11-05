// Named exports for every Figma variant of SeparatorIPad
import { SeparatorIPad } from '../../components/kit/SeparatorIPad.jsx';
// figma: Mode=Dark
export function SeparatorIPadModeDark(p = {}) { return <SeparatorIPad {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function SeparatorIPadModeLight(p = {}) { return <SeparatorIPad {...{"mode":"light"}} {...p} />; }
const __all = [SeparatorIPadModeDark, SeparatorIPadModeLight];
export function SeparatorIPadVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SeparatorIPadVariants;
