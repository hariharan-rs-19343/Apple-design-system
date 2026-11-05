// Named exports for every Figma variant of ScrollEdgeEffectHard
import { ScrollEdgeEffectHard } from '../../components/kit/ScrollEdgeEffectHard.jsx';
// figma: Edge=Bottom
export function ScrollEdgeEffectHardEdgeBottom(p = {}) { return <ScrollEdgeEffectHard {...{"edge":"bottom"}} {...p} />; }
// figma: Edge=Top
export function ScrollEdgeEffectHardEdgeTop(p = {}) { return <ScrollEdgeEffectHard {...{"edge":"top"}} {...p} />; }
const __all = [ScrollEdgeEffectHardEdgeBottom, ScrollEdgeEffectHardEdgeTop];
export function ScrollEdgeEffectHardVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ScrollEdgeEffectHardVariants;
