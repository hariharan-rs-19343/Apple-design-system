// Named exports for every Figma variant of MenuIPadActionsAndSubmenus
import { MenuIPadActionsAndSubmenus } from '../../components/kit/MenuIPadActionsAndSubmenus.jsx';
// figma: Mode=Dark
export function MenuIPadActionsAndSubmenusModeDark(p = {}) { return <MenuIPadActionsAndSubmenus {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function MenuIPadActionsAndSubmenusModeLight(p = {}) { return <MenuIPadActionsAndSubmenus {...{"mode":"light"}} {...p} />; }
const __all = [MenuIPadActionsAndSubmenusModeDark, MenuIPadActionsAndSubmenusModeLight];
export function MenuIPadActionsAndSubmenusVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default MenuIPadActionsAndSubmenusVariants;
