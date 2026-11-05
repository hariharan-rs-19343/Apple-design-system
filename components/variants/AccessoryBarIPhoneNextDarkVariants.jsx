// Named exports for every Figma variant of AccessoryBarIPhoneNextDark
import { AccessoryBarIPhoneNextDark } from '../../components/accessory-bars-dark/AccessoryBarIPhoneNextDark.jsx';
// figma: Enabled=False
export function AccessoryBarIPhoneNextDarkEnabledFalse(p = {}) { return <AccessoryBarIPhoneNextDark {...{"enabled":false}} {...p} />; }
// figma: Enabled=True
export function AccessoryBarIPhoneNextDarkEnabledTrue(p = {}) { return <AccessoryBarIPhoneNextDark {...{"enabled":true}} {...p} />; }
const __all = [AccessoryBarIPhoneNextDarkEnabledFalse, AccessoryBarIPhoneNextDarkEnabledTrue];
export function AccessoryBarIPhoneNextDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AccessoryBarIPhoneNextDarkVariants;
