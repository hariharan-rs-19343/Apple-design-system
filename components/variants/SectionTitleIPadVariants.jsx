// Named exports for every Figma variant of SectionTitleIPad
import { SectionTitleIPad } from '../../components/kit/SectionTitleIPad.jsx';
// figma: Mode=Dark
export function SectionTitleIPadModeDark(p = {}) { return <SectionTitleIPad {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function SectionTitleIPadModeLight(p = {}) { return <SectionTitleIPad {...{"mode":"light"}} {...p} />; }
const __all = [SectionTitleIPadModeDark, SectionTitleIPadModeLight];
export function SectionTitleIPadVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SectionTitleIPadVariants;
