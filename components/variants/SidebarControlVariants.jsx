// Named exports for every Figma variant of SidebarControl
import { SidebarControl } from '../../components/accessory-bars/SidebarControl.jsx';
// figma: Toggle=Sidebar
export function SidebarControlToggleSidebar(p = {}) { return <SidebarControl {...{"toggle":"sidebar"}} {...p} />; }
// figma: Toggle=Tab Bar
export function SidebarControlToggleTabBar(p = {}) { return <SidebarControl {...{"toggle":"tab bar"}} {...p} />; }
const __all = [SidebarControlToggleSidebar, SidebarControlToggleTabBar];
export function SidebarControlVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SidebarControlVariants;
