// Named exports for every Figma variant of AccessoryBarIPadPreviousDark
import { AccessoryBarIPadPreviousDark } from '../../components/accessory-bars-dark/AccessoryBarIPadPreviousDark.jsx';
// figma: Enabled=False
export function AccessoryBarIPadPreviousDarkEnabledFalse(p = {}) { return <AccessoryBarIPadPreviousDark {...{"enabled":false}} {...p} />; }
// figma: Enabled=True
export function AccessoryBarIPadPreviousDarkEnabledTrue(p = {}) { return <AccessoryBarIPadPreviousDark {...{"enabled":true}} {...p} />; }
const __all = [AccessoryBarIPadPreviousDarkEnabledFalse, AccessoryBarIPadPreviousDarkEnabledTrue];
export function AccessoryBarIPadPreviousDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AccessoryBarIPadPreviousDarkVariants;
