// Named exports for every Figma variant of Symbol2
import { Symbol2 } from '../../components/accessory-bars/Symbol2.jsx';
// figma: Mode=Light
export function Symbol2ModeLight(p = {}) { return <Symbol2 {...{"mode":"light"}} {...p} />; }
// figma: Mode=Dark
export function Symbol2ModeDark(p = {}) { return <Symbol2 {...{"mode":"dark"}} {...p} />; }
const __all = [Symbol2ModeLight, Symbol2ModeDark];
export function Symbol2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default Symbol2Variants;
