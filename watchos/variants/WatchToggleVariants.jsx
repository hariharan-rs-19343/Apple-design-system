// Named exports for every Figma variant of WatchToggle
import { WatchToggle } from '../../watchos/controls/WatchToggle.jsx';
// figma: State=Off
export function WatchToggleStateOff(p = {}) { return <WatchToggle {...{"state":"off"}} {...p} />; }
// figma: State=On
export function WatchToggleStateOn(p = {}) { return <WatchToggle {...{"state":"on"}} {...p} />; }
const __all = [WatchToggleStateOff, WatchToggleStateOn];
export function WatchToggleVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchToggleVariants;
