// Named exports for every Figma variant of HomeScreenIPhone
import { HomeScreenIPhone } from '../../components/kit/HomeScreenIPhone.jsx';
// figma: Widgets=Small
export function HomeScreenIPhoneWidgetsSmall(p = {}) { return <HomeScreenIPhone {...{"widgets":"sm"}} {...p} />; }
// figma: Widgets=Medium
export function HomeScreenIPhoneWidgetsMedium(p = {}) { return <HomeScreenIPhone {...{"widgets":"md"}} {...p} />; }
// figma: Widgets=Large
export function HomeScreenIPhoneWidgetsLarge(p = {}) { return <HomeScreenIPhone {...{"widgets":"lg"}} {...p} />; }
// figma: Widgets=None
export function HomeScreenIPhoneWidgetsNone(p = {}) { return <HomeScreenIPhone {...{"widgets":"none"}} {...p} />; }
const __all = [HomeScreenIPhoneWidgetsSmall, HomeScreenIPhoneWidgetsMedium, HomeScreenIPhoneWidgetsLarge, HomeScreenIPhoneWidgetsNone];
export function HomeScreenIPhoneVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default HomeScreenIPhoneVariants;
