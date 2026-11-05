// Named exports for every Figma variant of HomeScreenWidgetIPhone
import { HomeScreenWidgetIPhone } from '../../components/surfaces/HomeScreenWidgetIPhone.jsx';
// figma: Size=Small
export function HomeScreenWidgetIPhoneSizeSmall(p = {}) { return <HomeScreenWidgetIPhone {...{"size":"sm"}} {...p} />; }
// figma: Size=Medium
export function HomeScreenWidgetIPhoneSizeMedium(p = {}) { return <HomeScreenWidgetIPhone {...{"size":"md"}} {...p} />; }
// figma: Size=Large
export function HomeScreenWidgetIPhoneSizeLarge(p = {}) { return <HomeScreenWidgetIPhone {...{"size":"lg"}} {...p} />; }
const __all = [HomeScreenWidgetIPhoneSizeSmall, HomeScreenWidgetIPhoneSizeMedium, HomeScreenWidgetIPhoneSizeLarge];
export function HomeScreenWidgetIPhoneVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default HomeScreenWidgetIPhoneVariants;
