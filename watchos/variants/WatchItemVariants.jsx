// Named exports for every Figma variant of WatchItem
import { WatchItem } from '../../watchos/lists/WatchItem.jsx';
// figma: Text=3-Line Label + Symbol
export function WatchItemText3LineLabelSymbol(p = {}) { return <WatchItem {...{"text":"3-line label + symbol"}} {...p} />; }
// figma: Text=Label + Symbol
export function WatchItemTextLabelSymbol(p = {}) { return <WatchItem {...{"text":"label + symbol"}} {...p} />; }
// figma: Text=Subtitle + Title
export function WatchItemTextSubtitleTitle(p = {}) { return <WatchItem {...{"text":"subtitle + title"}} {...p} />; }
// figma: Text=Label + Subtitle
export function WatchItemTextLabelSubtitle(p = {}) { return <WatchItem {...{"text":"label + subtitle"}} {...p} />; }
// figma: Text=Default
export function WatchItemTextDefault(p = {}) { return <WatchItem {...{"text":"default"}} {...p} />; }
const __all = [WatchItemText3LineLabelSymbol, WatchItemTextLabelSymbol, WatchItemTextSubtitleTitle, WatchItemTextLabelSubtitle, WatchItemTextDefault];
export function WatchItemVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchItemVariants;
