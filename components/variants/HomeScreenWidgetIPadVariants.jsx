// Named exports for every Figma variant of HomeScreenWidgetIPad
import { HomeScreenWidgetIPad } from '../../components/home-screen/HomeScreenWidgetIPad.jsx';
// figma: Size=Small
export function HomeScreenWidgetIPadSizeSmall(p = {}) { return <HomeScreenWidgetIPad {...{"size":"sm"}} {...p} />; }
// figma: Size=Medium
export function HomeScreenWidgetIPadSizeMedium(p = {}) { return <HomeScreenWidgetIPad {...{"size":"md"}} {...p} />; }
// figma: Size=Large
export function HomeScreenWidgetIPadSizeLarge(p = {}) { return <HomeScreenWidgetIPad {...{"size":"lg"}} {...p} />; }
// figma: Size=Extra Large
export function HomeScreenWidgetIPadSizeExtraLarge(p = {}) { return <HomeScreenWidgetIPad {...{"size":"extra large"}} {...p} />; }
const __all = [HomeScreenWidgetIPadSizeSmall, HomeScreenWidgetIPadSizeMedium, HomeScreenWidgetIPadSizeLarge, HomeScreenWidgetIPadSizeExtraLarge];
export function HomeScreenWidgetIPadVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default HomeScreenWidgetIPadVariants;
