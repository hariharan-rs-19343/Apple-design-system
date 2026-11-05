// Named exports for every Figma variant of AccessoryBarIPadNextDark
import { AccessoryBarIPadNextDark } from '../../components/accessory-bars-dark/AccessoryBarIPadNextDark.jsx';
// figma: Enabled=False
export function AccessoryBarIPadNextDarkEnabledFalse(p = {}) { return <AccessoryBarIPadNextDark {...{"enabled":false}} {...p} />; }
// figma: Enabled=True
export function AccessoryBarIPadNextDarkEnabledTrue(p = {}) { return <AccessoryBarIPadNextDark {...{"enabled":true}} {...p} />; }
const __all = [AccessoryBarIPadNextDarkEnabledFalse, AccessoryBarIPadNextDarkEnabledTrue];
export function AccessoryBarIPadNextDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AccessoryBarIPadNextDarkVariants;
