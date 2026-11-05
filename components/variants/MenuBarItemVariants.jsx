// Named exports for every Figma variant of MenuBarItem
import { MenuBarItem } from '../../components/fields/MenuBarItem.jsx';
// figma: State=Deselected
export function MenuBarItemStateDeselected(p = {}) { return <MenuBarItem {...{"state":"deselected"}} {...p} />; }
// figma: State=Selected
export function MenuBarItemStateSelected(p = {}) { return <MenuBarItem {...{"state":"selected"}} {...p} />; }
const __all = [MenuBarItemStateDeselected, MenuBarItemStateSelected];
export function MenuBarItemVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default MenuBarItemVariants;
