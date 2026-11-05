// Named exports for every Figma variant of Arrows
import { Arrows } from '../../components/controls/Arrows.jsx';
// figma: State=Enabled
export function ArrowsStateEnabled(p = {}) { return <Arrows {...{"state":"enabled"}} {...p} />; }
// figma: State=Disabeld
export function ArrowsStateDisabeld(p = {}) { return <Arrows {...{"state":"disabeld"}} {...p} />; }
const __all = [ArrowsStateEnabled, ArrowsStateDisabeld];
export function ArrowsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ArrowsVariants;
