// Named exports for every Figma variant of AccessoryBarIPhonePreviousDark
import { AccessoryBarIPhonePreviousDark } from '../../components/accessory-bars-dark/AccessoryBarIPhonePreviousDark.jsx';
// figma: Enabled=False
export function AccessoryBarIPhonePreviousDarkEnabledFalse(p = {}) { return <AccessoryBarIPhonePreviousDark {...{"enabled":false}} {...p} />; }
// figma: Enabled=True
export function AccessoryBarIPhonePreviousDarkEnabledTrue(p = {}) { return <AccessoryBarIPhonePreviousDark {...{"enabled":true}} {...p} />; }
const __all = [AccessoryBarIPhonePreviousDarkEnabledFalse, AccessoryBarIPhonePreviousDarkEnabledTrue];
export function AccessoryBarIPhonePreviousDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AccessoryBarIPhonePreviousDarkVariants;
