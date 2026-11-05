// Named exports for every Figma variant of AccessoryBarWebForm
import { AccessoryBarWebForm } from '../../components/accessory-bars/AccessoryBarWebForm.jsx';
// figma: Mode=Dark
export function AccessoryBarWebFormModeDark(p = {}) { return <AccessoryBarWebForm {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function AccessoryBarWebFormModeLight(p = {}) { return <AccessoryBarWebForm {...{"mode":"light"}} {...p} />; }
const __all = [AccessoryBarWebFormModeDark, AccessoryBarWebFormModeLight];
export function AccessoryBarWebFormVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AccessoryBarWebFormVariants;
