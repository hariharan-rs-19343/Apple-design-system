// Named exports for every Figma variant of IPadProM413
import { IPadProM413 } from '../../components/kit/IPadProM413.jsx';
// figma: Color=Silver
export function IPadProM413ColorSilver(p = {}) { return <IPadProM413 {...{"color":"silver"}} {...p} />; }
// figma: Color=Space Gray
export function IPadProM413ColorSpaceGray(p = {}) { return <IPadProM413 {...{"color":"space gray"}} {...p} />; }
const __all = [IPadProM413ColorSilver, IPadProM413ColorSpaceGray];
export function IPadProM413Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default IPadProM413Variants;
