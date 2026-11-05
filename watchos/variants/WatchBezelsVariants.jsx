// Named exports for every Figma variant of WatchBezels
import { WatchBezels } from '../../watchos/bezels/WatchBezels.jsx';
// figma: Bezel Size=49mm
export function WatchBezelsBezelSize49mm(p = {}) { return <WatchBezels {...{"bezelSize":"49mm"}} {...p} />; }
// figma: Bezel Size=46mm
export function WatchBezelsBezelSize46mm(p = {}) { return <WatchBezels {...{"bezelSize":"46mm"}} {...p} />; }
// figma: Bezel Size=44mm
export function WatchBezelsBezelSize44mm(p = {}) { return <WatchBezels {...{"bezelSize":"44mm"}} {...p} />; }
// figma: Bezel Size=42mm
export function WatchBezelsBezelSize42mm(p = {}) { return <WatchBezels {...{"bezelSize":"42mm"}} {...p} />; }
// figma: Bezel Size=40mm
export function WatchBezelsBezelSize40mm(p = {}) { return <WatchBezels {...{"bezelSize":"40mm"}} {...p} />; }
const __all = [WatchBezelsBezelSize49mm, WatchBezelsBezelSize46mm, WatchBezelsBezelSize44mm, WatchBezelsBezelSize42mm, WatchBezelsBezelSize40mm];
export function WatchBezelsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchBezelsVariants;
