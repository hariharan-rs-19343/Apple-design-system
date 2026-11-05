// Named exports for every Figma variant of Sliders
import { Sliders } from '../../components/sliders/Sliders.jsx';
// figma: Value=100%
export function SlidersValue100(p = {}) { return <Sliders {...{"value":"100%"}} {...p} />; }
// figma: Value=75%
export function SlidersValue75(p = {}) { return <Sliders {...{"value":"75%"}} {...p} />; }
// figma: Value=50%
export function SlidersValue50(p = {}) { return <Sliders {...{"value":"50%"}} {...p} />; }
// figma: Value=25%
export function SlidersValue25(p = {}) { return <Sliders {...{"value":"25%"}} {...p} />; }
// figma: Value=0%
export function SlidersValue0(p = {}) { return <Sliders {...{"value":"0%"}} {...p} />; }
const __all = [SlidersValue100, SlidersValue75, SlidersValue50, SlidersValue25, SlidersValue0];
export function SlidersVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SlidersVariants;
