// Named exports for every Figma variant of AccessoryBarIPhoneFind
import { AccessoryBarIPhoneFind } from '../../components/accessory-bars/AccessoryBarIPhoneFind.jsx';
// figma: Mode=Dark
export function AccessoryBarIPhoneFindModeDark(p = {}) { return <AccessoryBarIPhoneFind {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function AccessoryBarIPhoneFindModeLight(p = {}) { return <AccessoryBarIPhoneFind {...{"mode":"light"}} {...p} />; }
const __all = [AccessoryBarIPhoneFindModeDark, AccessoryBarIPhoneFindModeLight];
export function AccessoryBarIPhoneFindVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AccessoryBarIPhoneFindVariants;
