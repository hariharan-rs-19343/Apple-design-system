// Named exports for every Figma variant of WatchScrollbar
import { WatchScrollbar } from '../../watchos/scrollbars/WatchScrollbar.jsx';
// figma: Scroll View Height=400%, Position=4
export function WatchScrollbarScrollViewHeight400Position4(p = {}) { return <WatchScrollbar {...{"scrollViewHeight":"400%","position":"4"}} {...p} />; }
// figma: Scroll View Height=400%, Position=3
export function WatchScrollbarScrollViewHeight400Position3(p = {}) { return <WatchScrollbar {...{"scrollViewHeight":"400%","position":"3"}} {...p} />; }
// figma: Scroll View Height=400%, Position=2
export function WatchScrollbarScrollViewHeight400Position2(p = {}) { return <WatchScrollbar {...{"scrollViewHeight":"400%","position":"2"}} {...p} />; }
// figma: Scroll View Height=400%, Position=1
export function WatchScrollbarScrollViewHeight400Position1(p = {}) { return <WatchScrollbar {...{"scrollViewHeight":"400%","position":"1"}} {...p} />; }
// figma: Scroll View Height=300%, Position=3
export function WatchScrollbarScrollViewHeight300Position3(p = {}) { return <WatchScrollbar {...{"scrollViewHeight":"300%","position":"3"}} {...p} />; }
// figma: Scroll View Height=300%, Position=2
export function WatchScrollbarScrollViewHeight300Position2(p = {}) { return <WatchScrollbar {...{"scrollViewHeight":"300%","position":"2"}} {...p} />; }
// figma: Scroll View Height=300%, Position=1
export function WatchScrollbarScrollViewHeight300Position1(p = {}) { return <WatchScrollbar {...{"scrollViewHeight":"300%","position":"1"}} {...p} />; }
// figma: Scroll View Height=200%, Position=2
export function WatchScrollbarScrollViewHeight200Position2(p = {}) { return <WatchScrollbar {...{"scrollViewHeight":"200%","position":"2"}} {...p} />; }
// figma: Scroll View Height=200%, Position=1
export function WatchScrollbarScrollViewHeight200Position1(p = {}) { return <WatchScrollbar {...{"scrollViewHeight":"200%","position":"1"}} {...p} />; }
const __all = [WatchScrollbarScrollViewHeight400Position4, WatchScrollbarScrollViewHeight400Position3, WatchScrollbarScrollViewHeight400Position2, WatchScrollbarScrollViewHeight400Position1, WatchScrollbarScrollViewHeight300Position3, WatchScrollbarScrollViewHeight300Position2, WatchScrollbarScrollViewHeight300Position1, WatchScrollbarScrollViewHeight200Position2, WatchScrollbarScrollViewHeight200Position1];
export function WatchScrollbarVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchScrollbarVariants;
