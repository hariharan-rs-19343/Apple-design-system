// Named exports for every Figma variant of SidebarSearchField
import { SidebarSearchField } from '../../components/sidebar-items/SidebarSearchField.jsx';
// figma: Mode=Dark, State=Typing
export function SidebarSearchFieldModeDarkStateTyping(p = {}) { return <SidebarSearchField {...{"mode":"dark","state":"typing"}} {...p} />; }
// figma: Mode=Dark, State=Value
export function SidebarSearchFieldModeDarkStateValue(p = {}) { return <SidebarSearchField {...{"mode":"dark","state":"value"}} {...p} />; }
// figma: Mode=Dark, State=Placeholder
export function SidebarSearchFieldModeDarkStatePlaceholder(p = {}) { return <SidebarSearchField {...{"mode":"dark","state":"placeholder"}} {...p} />; }
// figma: Mode=Light, State=Typing
export function SidebarSearchFieldModeLightStateTyping(p = {}) { return <SidebarSearchField {...{"mode":"light","state":"typing"}} {...p} />; }
// figma: Mode=Light, State=Value
export function SidebarSearchFieldModeLightStateValue(p = {}) { return <SidebarSearchField {...{"mode":"light","state":"value"}} {...p} />; }
// figma: Mode=Light, State=Placeholder
export function SidebarSearchFieldModeLightStatePlaceholder(p = {}) { return <SidebarSearchField {...{"mode":"light","state":"placeholder"}} {...p} />; }
const __all = [SidebarSearchFieldModeDarkStateTyping, SidebarSearchFieldModeDarkStateValue, SidebarSearchFieldModeDarkStatePlaceholder, SidebarSearchFieldModeLightStateTyping, SidebarSearchFieldModeLightStateValue, SidebarSearchFieldModeLightStatePlaceholder];
export function SidebarSearchFieldVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SidebarSearchFieldVariants;
