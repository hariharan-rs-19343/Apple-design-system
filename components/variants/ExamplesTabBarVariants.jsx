// Named exports for every Figma variant of ExamplesTabBar
import { ExamplesTabBar } from '../../components/kit/ExamplesTabBar.jsx';
// figma: Split Search=False
export function ExamplesTabBarSplitSearchFalse(p = {}) { return <ExamplesTabBar {...{"splitSearch":false}} {...p} />; }
// figma: Split Search=True
export function ExamplesTabBarSplitSearchTrue(p = {}) { return <ExamplesTabBar {...{"splitSearch":true}} {...p} />; }
const __all = [ExamplesTabBarSplitSearchFalse, ExamplesTabBarSplitSearchTrue];
export function ExamplesTabBarVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ExamplesTabBarVariants;
