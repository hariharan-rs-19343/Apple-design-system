// Named exports for every Figma variant of HomeScreenIPad
import { HomeScreenIPad } from '../../components/home-screen/HomeScreenIPad.jsx';
// figma: Widgets=Small
export function HomeScreenIPadWidgetsSmall(p = {}) { return <HomeScreenIPad {...{"widgets":"sm"}} {...p} />; }
// figma: Widgets=Medium
export function HomeScreenIPadWidgetsMedium(p = {}) { return <HomeScreenIPad {...{"widgets":"md"}} {...p} />; }
// figma: Widgets=Large
export function HomeScreenIPadWidgetsLarge(p = {}) { return <HomeScreenIPad {...{"widgets":"lg"}} {...p} />; }
// figma: Widgets=Extra Large
export function HomeScreenIPadWidgetsExtraLarge(p = {}) { return <HomeScreenIPad {...{"widgets":"extra large"}} {...p} />; }
// figma: Widgets=None
export function HomeScreenIPadWidgetsNone(p = {}) { return <HomeScreenIPad {...{"widgets":"none"}} {...p} />; }
const __all = [HomeScreenIPadWidgetsSmall, HomeScreenIPadWidgetsMedium, HomeScreenIPadWidgetsLarge, HomeScreenIPadWidgetsExtraLarge, HomeScreenIPadWidgetsNone];
export function HomeScreenIPadVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default HomeScreenIPadVariants;
