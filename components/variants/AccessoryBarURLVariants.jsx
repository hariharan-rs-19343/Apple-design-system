// Named exports for every Figma variant of AccessoryBarURL
import { AccessoryBarURL } from '../../components/accessory-bars/AccessoryBarURL.jsx';
// figma: Mode=Dark
export function AccessoryBarURLModeDark(p = {}) { return <AccessoryBarURL {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function AccessoryBarURLModeLight(p = {}) { return <AccessoryBarURL {...{"mode":"light"}} {...p} />; }
const __all = [AccessoryBarURLModeDark, AccessoryBarURLModeLight];
export function AccessoryBarURLVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AccessoryBarURLVariants;
