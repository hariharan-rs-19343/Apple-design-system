// Named exports for every Figma variant of ScrollEdgeEffectSoft
import { ScrollEdgeEffectSoft } from '../../components/kit/ScrollEdgeEffectSoft.jsx';
// figma: Edge=Leading
export function ScrollEdgeEffectSoftEdgeLeading(p = {}) { return <ScrollEdgeEffectSoft {...{"edge":"leading"}} {...p} />; }
// figma: Edge=Trailing
export function ScrollEdgeEffectSoftEdgeTrailing(p = {}) { return <ScrollEdgeEffectSoft {...{"edge":"trailing"}} {...p} />; }
// figma: Edge=Bottom
export function ScrollEdgeEffectSoftEdgeBottom(p = {}) { return <ScrollEdgeEffectSoft {...{"edge":"bottom"}} {...p} />; }
// figma: Edge=Top
export function ScrollEdgeEffectSoftEdgeTop(p = {}) { return <ScrollEdgeEffectSoft {...{"edge":"top"}} {...p} />; }
const __all = [ScrollEdgeEffectSoftEdgeLeading, ScrollEdgeEffectSoftEdgeTrailing, ScrollEdgeEffectSoftEdgeBottom, ScrollEdgeEffectSoftEdgeTop];
export function ScrollEdgeEffectSoftVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ScrollEdgeEffectSoftVariants;
