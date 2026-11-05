// Named exports for every Figma variant of MenuItemDark
import { MenuItemDark } from '../../components/fields/MenuItemDark.jsx';
// figma: Type=Destructive
export function MenuItemDarkTypeDestructive(p = {}) { return <MenuItemDark {...{"type":"destructive"}} {...p} />; }
// figma: Type=Default
export function MenuItemDarkTypeDefault(p = {}) { return <MenuItemDark {...{"type":"default"}} {...p} />; }
const __all = [MenuItemDarkTypeDestructive, MenuItemDarkTypeDefault];
export function MenuItemDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default MenuItemDarkVariants;
