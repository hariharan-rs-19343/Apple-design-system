// Named exports for every Figma variant of AccessoryBarIPadButtonsDark
import { AccessoryBarIPadButtonsDark } from '../../components/accessory-bars-dark/AccessoryBarIPadButtonsDark.jsx';
// figma: Enabled=False
export function AccessoryBarIPadButtonsDarkEnabledFalse(p = {}) { return <AccessoryBarIPadButtonsDark {...{"enabled":false}} {...p} />; }
// figma: Enabled=True
export function AccessoryBarIPadButtonsDarkEnabledTrue(p = {}) { return <AccessoryBarIPadButtonsDark {...{"enabled":true}} {...p} />; }
const __all = [AccessoryBarIPadButtonsDarkEnabledFalse, AccessoryBarIPadButtonsDarkEnabledTrue];
export function AccessoryBarIPadButtonsDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AccessoryBarIPadButtonsDarkVariants;
