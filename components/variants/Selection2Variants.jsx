// Named exports for every Figma variant of Selection2
import { Selection2 } from '../../components/kit/Selection2.jsx';
// figma: Mode=Dark
export function Selection2ModeDark(p = {}) { return <Selection2 {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function Selection2ModeLight(p = {}) { return <Selection2 {...{"mode":"light"}} {...p} />; }
const __all = [Selection2ModeDark, Selection2ModeLight];
export function Selection2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default Selection2Variants;
