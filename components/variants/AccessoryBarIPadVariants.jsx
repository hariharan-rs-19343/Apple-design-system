// Named exports for every Figma variant of AccessoryBarIPad
import { AccessoryBarIPad } from '../../components/accessory-bars/AccessoryBarIPad.jsx';
// figma: Mode=Dark
export function AccessoryBarIPadModeDark(p = {}) { return <AccessoryBarIPad {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function AccessoryBarIPadModeLight(p = {}) { return <AccessoryBarIPad {...{"mode":"light"}} {...p} />; }
const __all = [AccessoryBarIPadModeDark, AccessoryBarIPadModeLight];
export function AccessoryBarIPadVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AccessoryBarIPadVariants;
