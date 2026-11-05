// Named exports for every Figma variant of MenuIndicator
import { MenuIndicator } from '../../components/menus/MenuIndicator.jsx';
// figma: Mode=Dark
export function MenuIndicatorModeDark(p = {}) { return <MenuIndicator {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function MenuIndicatorModeLight(p = {}) { return <MenuIndicator {...{"mode":"light"}} {...p} />; }
const __all = [MenuIndicatorModeDark, MenuIndicatorModeLight];
export function MenuIndicatorVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default MenuIndicatorVariants;
