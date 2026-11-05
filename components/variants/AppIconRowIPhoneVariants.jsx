// Named exports for every Figma variant of AppIconRowIPhone
import { AppIconRowIPhone } from '../../components/misc/AppIconRowIPhone.jsx';
// figma: Icons=4
export function AppIconRowIPhoneIcons4(p = {}) { return <AppIconRowIPhone {...{"icons":"4"}} {...p} />; }
// figma: Icons=3
export function AppIconRowIPhoneIcons3(p = {}) { return <AppIconRowIPhone {...{"icons":"3"}} {...p} />; }
// figma: Icons=2
export function AppIconRowIPhoneIcons2(p = {}) { return <AppIconRowIPhone {...{"icons":"2"}} {...p} />; }
// figma: Icons=1
export function AppIconRowIPhoneIcons1(p = {}) { return <AppIconRowIPhone {...{"icons":"1"}} {...p} />; }
const __all = [AppIconRowIPhoneIcons4, AppIconRowIPhoneIcons3, AppIconRowIPhoneIcons2, AppIconRowIPhoneIcons1];
export function AppIconRowIPhoneVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AppIconRowIPhoneVariants;
