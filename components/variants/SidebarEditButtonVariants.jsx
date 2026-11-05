// Named exports for every Figma variant of SidebarEditButton
import { SidebarEditButton } from '../../components/sidebar-items/SidebarEditButton.jsx';
// figma: Mode=Dark, Type=Selectable
export function SidebarEditButtonModeDarkTypeSelectable(p = {}) { return <SidebarEditButton {...{"mode":"dark","type":"selectable"}} {...p} />; }
// figma: Mode=Dark, Type=Selected
export function SidebarEditButtonModeDarkTypeSelected(p = {}) { return <SidebarEditButton {...{"mode":"dark","type":"selected"}} {...p} />; }
// figma: Mode=Dark, Type=Delete
export function SidebarEditButtonModeDarkTypeDelete(p = {}) { return <SidebarEditButton {...{"mode":"dark","type":"delete"}} {...p} />; }
// figma: Mode=Light, Type=Selectable
export function SidebarEditButtonModeLightTypeSelectable(p = {}) { return <SidebarEditButton {...{"mode":"light","type":"selectable"}} {...p} />; }
// figma: Mode=Light, Type=Selected
export function SidebarEditButtonModeLightTypeSelected(p = {}) { return <SidebarEditButton {...{"mode":"light","type":"selected"}} {...p} />; }
// figma: Mode=Light, Type=Delete
export function SidebarEditButtonModeLightTypeDelete(p = {}) { return <SidebarEditButton {...{"mode":"light","type":"delete"}} {...p} />; }
const __all = [SidebarEditButtonModeDarkTypeSelectable, SidebarEditButtonModeDarkTypeSelected, SidebarEditButtonModeDarkTypeDelete, SidebarEditButtonModeLightTypeSelectable, SidebarEditButtonModeLightTypeSelected, SidebarEditButtonModeLightTypeDelete];
export function SidebarEditButtonVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SidebarEditButtonVariants;
