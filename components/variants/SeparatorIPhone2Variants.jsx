// Named exports for every Figma variant of SeparatorIPhone2
import { SeparatorIPhone2 } from '../../components/menus/SeparatorIPhone2.jsx';
// figma: Mode=Dark
export function SeparatorIPhone2ModeDark(p = {}) { return <SeparatorIPhone2 {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function SeparatorIPhone2ModeLight(p = {}) { return <SeparatorIPhone2 {...{"mode":"light"}} {...p} />; }
const __all = [SeparatorIPhone2ModeDark, SeparatorIPhone2ModeLight];
export function SeparatorIPhone2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SeparatorIPhone2Variants;
