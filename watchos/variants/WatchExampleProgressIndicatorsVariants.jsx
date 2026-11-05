// Named exports for every Figma variant of WatchExampleProgressIndicators
import { WatchExampleProgressIndicators } from '../../watchos/examples/WatchExampleProgressIndicators.jsx';
// figma: Type=Content Area
export function WatchExampleProgressIndicatorsTypeContentArea(p = {}) { return <WatchExampleProgressIndicators {...{"type":"content area"}} {...p} />; }
// figma: Type=Inline Table Row
export function WatchExampleProgressIndicatorsTypeInlineTableRow(p = {}) { return <WatchExampleProgressIndicators {...{"type":"inline table row"}} {...p} />; }
const __all = [WatchExampleProgressIndicatorsTypeContentArea, WatchExampleProgressIndicatorsTypeInlineTableRow];
export function WatchExampleProgressIndicatorsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchExampleProgressIndicatorsVariants;
