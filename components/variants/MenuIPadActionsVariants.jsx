// Named exports for every Figma variant of MenuIPadActions
import { MenuIPadActions } from '../../components/kit/MenuIPadActions.jsx';
// figma: Mode=Dark
export function MenuIPadActionsModeDark(p = {}) { return <MenuIPadActions {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function MenuIPadActionsModeLight(p = {}) { return <MenuIPadActions {...{"mode":"light"}} {...p} />; }
const __all = [MenuIPadActionsModeDark, MenuIPadActionsModeLight];
export function MenuIPadActionsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default MenuIPadActionsVariants;
