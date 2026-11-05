// Named exports for every Figma variant of MenuIPhone
import { MenuIPhone } from '../../components/kit/MenuIPhone.jsx';
// figma: Mode=Dark
export function MenuIPhoneModeDark(p = {}) { return <MenuIPhone {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function MenuIPhoneModeLight(p = {}) { return <MenuIPhone {...{"mode":"light"}} {...p} />; }
const __all = [MenuIPhoneModeDark, MenuIPhoneModeLight];
export function MenuIPhoneVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default MenuIPhoneVariants;
