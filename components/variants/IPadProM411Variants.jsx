// Named exports for every Figma variant of IPadProM411
import { IPadProM411 } from '../../components/examples-sidebar/IPadProM411.jsx';
// figma: Color=Silver
export function IPadProM411ColorSilver(p = {}) { return <IPadProM411 {...{"color":"silver"}} {...p} />; }
// figma: Color=Space Gray
export function IPadProM411ColorSpaceGray(p = {}) { return <IPadProM411 {...{"color":"space gray"}} {...p} />; }
const __all = [IPadProM411ColorSilver, IPadProM411ColorSpaceGray];
export function IPadProM411Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default IPadProM411Variants;
