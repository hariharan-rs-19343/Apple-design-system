// Named exports for every Figma variant of WatchProgressIndicator
import { WatchProgressIndicator } from '../../watchos/controls/WatchProgressIndicator.jsx';
// figma: Size=Small (Status Bar)
export function WatchProgressIndicatorSizeSmallStatusBar(p = {}) { return <WatchProgressIndicator {...{"size":"small (status bar)"}} {...p} />; }
// figma: Size=Medium (Table Row)
export function WatchProgressIndicatorSizeMediumTableRow(p = {}) { return <WatchProgressIndicator {...{"size":"medium (table row)"}} {...p} />; }
// figma: Size=Large (Content Area)
export function WatchProgressIndicatorSizeLargeContentArea(p = {}) { return <WatchProgressIndicator {...{"size":"large (content area)"}} {...p} />; }
const __all = [WatchProgressIndicatorSizeSmallStatusBar, WatchProgressIndicatorSizeMediumTableRow, WatchProgressIndicatorSizeLargeContentArea];
export function WatchProgressIndicatorVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchProgressIndicatorVariants;
