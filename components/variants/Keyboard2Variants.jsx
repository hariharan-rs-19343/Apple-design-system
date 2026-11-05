// Named exports for every Figma variant of Keyboard2
import { Keyboard2 } from '../../components/kit/Keyboard2.jsx';
// figma: Type=Shift
export function Keyboard2TypeShift(p = {}) { return <Keyboard2 {...{"type":"shift"}} {...p} />; }
// figma: Type=Default
export function Keyboard2TypeDefault(p = {}) { return <Keyboard2 {...{"type":"default"}} {...p} />; }
const __all = [Keyboard2TypeShift, Keyboard2TypeDefault];
export function Keyboard2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default Keyboard2Variants;
