// Named exports for every Figma variant of AccessoryBarIPadButtonsLight
import { AccessoryBarIPadButtonsLight } from '../../components/accessory-bars-dark/AccessoryBarIPadButtonsLight.jsx';
// figma: Enabled=False
export function AccessoryBarIPadButtonsLightEnabledFalse(p = {}) { return <AccessoryBarIPadButtonsLight {...{"enabled":false}} {...p} />; }
// figma: Enabled=True
export function AccessoryBarIPadButtonsLightEnabledTrue(p = {}) { return <AccessoryBarIPadButtonsLight {...{"enabled":true}} {...p} />; }
const __all = [AccessoryBarIPadButtonsLightEnabledFalse, AccessoryBarIPadButtonsLightEnabledTrue];
export function AccessoryBarIPadButtonsLightVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AccessoryBarIPadButtonsLightVariants;
