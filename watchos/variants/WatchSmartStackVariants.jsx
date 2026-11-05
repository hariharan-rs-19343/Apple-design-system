// Named exports for every Figma variant of WatchSmartStack
import { WatchSmartStack } from '../../watchos/widgets/WatchSmartStack.jsx';
// figma: Size=40mm
export function WatchSmartStackSize40mm(p = {}) { return <WatchSmartStack {...{"size":"40mm"}} {...p} />; }
// figma: Size=42mm
export function WatchSmartStackSize42mm(p = {}) { return <WatchSmartStack {...{"size":"42mm"}} {...p} />; }
// figma: Size=44mm
export function WatchSmartStackSize44mm(p = {}) { return <WatchSmartStack {...{"size":"44mm"}} {...p} />; }
// figma: Size=46mm
export function WatchSmartStackSize46mm(p = {}) { return <WatchSmartStack {...{"size":"46mm"}} {...p} />; }
// figma: Size=49mm
export function WatchSmartStackSize49mm(p = {}) { return <WatchSmartStack {...{"size":"49mm"}} {...p} />; }
const __all = [WatchSmartStackSize40mm, WatchSmartStackSize42mm, WatchSmartStackSize44mm, WatchSmartStackSize46mm, WatchSmartStackSize49mm];
export function WatchSmartStackVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchSmartStackVariants;
