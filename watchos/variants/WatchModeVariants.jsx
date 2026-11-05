// Named exports for every Figma variant of WatchMode
import { WatchMode } from '../../watchos/bezels/WatchMode.jsx';
// figma: Mode=Light
export function WatchModeModeLight(p = {}) { return <WatchMode {...{"mode":"light"}} {...p} />; }
// figma: Mode=Dark
export function WatchModeModeDark(p = {}) { return <WatchMode {...{"mode":"dark"}} {...p} />; }
const __all = [WatchModeModeLight, WatchModeModeDark];
export function WatchModeVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchModeVariants;
