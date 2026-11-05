// Named exports for every Figma variant of AccessoryBarIPadNext
import { AccessoryBarIPadNext } from '../../components/accessory-bars-dark/AccessoryBarIPadNext.jsx';
// figma: Enabled=False
export function AccessoryBarIPadNextEnabledFalse(p = {}) { return <AccessoryBarIPadNext {...{"enabled":false}} {...p} />; }
// figma: Enabled=True
export function AccessoryBarIPadNextEnabledTrue(p = {}) { return <AccessoryBarIPadNext {...{"enabled":true}} {...p} />; }
const __all = [AccessoryBarIPadNextEnabledFalse, AccessoryBarIPadNextEnabledTrue];
export function AccessoryBarIPadNextVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AccessoryBarIPadNextVariants;
