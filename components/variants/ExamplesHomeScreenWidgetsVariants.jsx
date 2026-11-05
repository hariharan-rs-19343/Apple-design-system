// Named exports for every Figma variant of ExamplesHomeScreenWidgets
import { ExamplesHomeScreenWidgets } from '../../components/kit/ExamplesHomeScreenWidgets.jsx';
// figma: Size=Large
export function ExamplesHomeScreenWidgetsSizeLarge(p = {}) { return <ExamplesHomeScreenWidgets {...{"size":"lg"}} {...p} />; }
// figma: Size=Medium
export function ExamplesHomeScreenWidgetsSizeMedium(p = {}) { return <ExamplesHomeScreenWidgets {...{"size":"md"}} {...p} />; }
// figma: Size=Small
export function ExamplesHomeScreenWidgetsSizeSmall(p = {}) { return <ExamplesHomeScreenWidgets {...{"size":"sm"}} {...p} />; }
const __all = [ExamplesHomeScreenWidgetsSizeLarge, ExamplesHomeScreenWidgetsSizeMedium, ExamplesHomeScreenWidgetsSizeSmall];
export function ExamplesHomeScreenWidgetsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ExamplesHomeScreenWidgetsVariants;
