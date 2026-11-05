// Named exports for every Figma variant of WatchTabs
import { WatchTabs } from '../../watchos/scrollbars/WatchTabs.jsx';
// figma: Pages=4, Position=4
export function WatchTabsPages4Position4(p = {}) { return <WatchTabs {...{"pages":"4","position":"4"}} {...p} />; }
// figma: Pages=4, Position=3
export function WatchTabsPages4Position3(p = {}) { return <WatchTabs {...{"pages":"4","position":"3"}} {...p} />; }
// figma: Pages=4, Position=2
export function WatchTabsPages4Position2(p = {}) { return <WatchTabs {...{"pages":"4","position":"2"}} {...p} />; }
// figma: Pages=4, Position=1
export function WatchTabsPages4Position1(p = {}) { return <WatchTabs {...{"pages":"4","position":"1"}} {...p} />; }
// figma: Pages=3, Position=3
export function WatchTabsPages3Position3(p = {}) { return <WatchTabs {...{"pages":"3","position":"3"}} {...p} />; }
// figma: Pages=3, Position=2
export function WatchTabsPages3Position2(p = {}) { return <WatchTabs {...{"pages":"3","position":"2"}} {...p} />; }
// figma: Pages=3, Position=1
export function WatchTabsPages3Position1(p = {}) { return <WatchTabs {...{"pages":"3","position":"1"}} {...p} />; }
// figma: Pages=2, Position=2
export function WatchTabsPages2Position2(p = {}) { return <WatchTabs {...{"pages":"2","position":"2"}} {...p} />; }
// figma: Pages=2, Position=1
export function WatchTabsPages2Position1(p = {}) { return <WatchTabs {...{"pages":"2","position":"1"}} {...p} />; }
const __all = [WatchTabsPages4Position4, WatchTabsPages4Position3, WatchTabsPages4Position2, WatchTabsPages4Position1, WatchTabsPages3Position3, WatchTabsPages3Position2, WatchTabsPages3Position1, WatchTabsPages2Position2, WatchTabsPages2Position1];
export function WatchTabsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchTabsVariants;
