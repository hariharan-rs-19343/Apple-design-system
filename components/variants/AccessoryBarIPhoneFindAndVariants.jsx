// Named exports for every Figma variant of AccessoryBarIPhoneFindAnd
import { AccessoryBarIPhoneFindAnd } from '../../components/accessory-bars/AccessoryBarIPhoneFindAnd.jsx';
// figma: Mode=Dark
export function AccessoryBarIPhoneFindAndModeDark(p = {}) { return <AccessoryBarIPhoneFindAnd {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function AccessoryBarIPhoneFindAndModeLight(p = {}) { return <AccessoryBarIPhoneFindAnd {...{"mode":"light"}} {...p} />; }
const __all = [AccessoryBarIPhoneFindAndModeDark, AccessoryBarIPhoneFindAndModeLight];
export function AccessoryBarIPhoneFindAndVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AccessoryBarIPhoneFindAndVariants;
