// Named exports for every Figma variant of AccessoryBarIPadPrevious
import { AccessoryBarIPadPrevious } from '../../components/accessory-bars-dark/AccessoryBarIPadPrevious.jsx';
// figma: Enabled=False
export function AccessoryBarIPadPreviousEnabledFalse(p = {}) { return <AccessoryBarIPadPrevious {...{"enabled":false}} {...p} />; }
// figma: Enabled=True
export function AccessoryBarIPadPreviousEnabledTrue(p = {}) { return <AccessoryBarIPadPrevious {...{"enabled":true}} {...p} />; }
const __all = [AccessoryBarIPadPreviousEnabledFalse, AccessoryBarIPadPreviousEnabledTrue];
export function AccessoryBarIPadPreviousVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AccessoryBarIPadPreviousVariants;
