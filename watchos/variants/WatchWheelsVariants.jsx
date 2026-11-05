// Named exports for every Figma variant of WatchWheels
import { WatchWheels } from '../../watchos/pickers/WatchWheels.jsx';
// figma: State=Default
export function WatchWheelsStateDefault(p = {}) { return <WatchWheels {...{"state":"default"}} {...p} />; }
// figma: State=Focused
export function WatchWheelsStateFocused(p = {}) { return <WatchWheels {...{"state":"focused"}} {...p} />; }
const __all = [WatchWheelsStateDefault, WatchWheelsStateFocused];
export function WatchWheelsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchWheelsVariants;
