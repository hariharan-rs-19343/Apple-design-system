// Named exports for every Figma variant of SectionHeader
import { SectionHeader } from '../../components/sidebar-items/SectionHeader.jsx';
// figma: Mode=Dark
export function SectionHeaderModeDark(p = {}) { return <SectionHeader {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function SectionHeaderModeLight(p = {}) { return <SectionHeader {...{"mode":"light"}} {...p} />; }
const __all = [SectionHeaderModeDark, SectionHeaderModeLight];
export function SectionHeaderVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SectionHeaderVariants;
