// Named exports for every Figma variant of WatchItemSourceList
import { WatchItemSourceList } from '../../watchos/lists/WatchItemSourceList.jsx';
// figma: Scroll State=Partially Clipped
export function WatchItemSourceListScrollStatePartiallyClipped(p = {}) { return <WatchItemSourceList {...{"scrollState":"partially clipped"}} {...p} />; }
// figma: Scroll State=Full View
export function WatchItemSourceListScrollStateFullView(p = {}) { return <WatchItemSourceList {...{"scrollState":"full view"}} {...p} />; }
const __all = [WatchItemSourceListScrollStatePartiallyClipped, WatchItemSourceListScrollStateFullView];
export function WatchItemSourceListVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchItemSourceListVariants;
