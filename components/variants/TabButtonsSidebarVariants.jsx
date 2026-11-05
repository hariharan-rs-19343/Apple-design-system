// Named exports for every Figma variant of TabButtonsSidebar
import { TabButtonsSidebar } from '../../components/tab-bars/TabButtonsSidebar.jsx';
// figma: Mode=Dark, State=Selected
export function TabButtonsSidebarModeDarkStateSelected(p = {}) { return <TabButtonsSidebar {...{"mode":"dark","state":"selected"}} {...p} />; }
// figma: Mode=Dark Elevated, State=Selected
export function TabButtonsSidebarModeDarkElevatedStateSelected(p = {}) { return <TabButtonsSidebar {...{"mode":"dark elevated","state":"selected"}} {...p} />; }
// figma: Mode=Light, State=Selected
export function TabButtonsSidebarModeLightStateSelected(p = {}) { return <TabButtonsSidebar {...{"mode":"light","state":"selected"}} {...p} />; }
const __all = [TabButtonsSidebarModeDarkStateSelected, TabButtonsSidebarModeDarkElevatedStateSelected, TabButtonsSidebarModeLightStateSelected];
export function TabButtonsSidebarVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default TabButtonsSidebarVariants;
