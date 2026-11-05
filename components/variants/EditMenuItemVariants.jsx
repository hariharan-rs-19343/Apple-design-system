// Named exports for every Figma variant of EditMenuItem
import { EditMenuItem } from '../../components/menus/EditMenuItem.jsx';
// figma: Mode=Light, State=Destructive
export function EditMenuItemModeLightStateDestructive(p = {}) { return <EditMenuItem {...{"mode":"light","state":"destructive"}} {...p} />; }
// figma: Mode=Dark, State=Destructive
export function EditMenuItemModeDarkStateDestructive(p = {}) { return <EditMenuItem {...{"mode":"dark","state":"destructive"}} {...p} />; }
// figma: Mode=Light, State=Default
export function EditMenuItemModeLightStateDefault(p = {}) { return <EditMenuItem {...{"mode":"light","state":"default"}} {...p} />; }
// figma: Mode=Dark, State=Default
export function EditMenuItemModeDarkStateDefault(p = {}) { return <EditMenuItem {...{"mode":"dark","state":"default"}} {...p} />; }
const __all = [EditMenuItemModeLightStateDestructive, EditMenuItemModeDarkStateDestructive, EditMenuItemModeLightStateDefault, EditMenuItemModeDarkStateDefault];
export function EditMenuItemVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default EditMenuItemVariants;
