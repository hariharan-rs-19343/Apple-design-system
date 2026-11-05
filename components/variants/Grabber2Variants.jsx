// Named exports for every Figma variant of Grabber2
import { Grabber2 } from '../../components/navigation/Grabber2.jsx';
// figma: Mode=Light
export function Grabber2ModeLight(p = {}) { return <Grabber2 {...{"mode":"light"}} {...p} />; }
// figma: Mode=Dark
export function Grabber2ModeDark(p = {}) { return <Grabber2 {...{"mode":"dark"}} {...p} />; }
const __all = [Grabber2ModeLight, Grabber2ModeDark];
export function Grabber2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default Grabber2Variants;
