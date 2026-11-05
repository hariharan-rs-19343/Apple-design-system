// Named exports for every Figma variant of TabButtonsText
import { TabButtonsText } from '../../components/misc/TabButtonsText.jsx';
// figma: Mode=Dark, State=Selected
export function TabButtonsTextModeDarkStateSelected(p = {}) { return <TabButtonsText {...{"mode":"dark","state":"selected"}} {...p} />; }
// figma: Mode=Dark Elevated, State=Selected
export function TabButtonsTextModeDarkElevatedStateSelected(p = {}) { return <TabButtonsText {...{"mode":"dark elevated","state":"selected"}} {...p} />; }
// figma: Mode=Dark, State=Unselected
export function TabButtonsTextModeDarkStateUnselected(p = {}) { return <TabButtonsText {...{"mode":"dark","state":"unselected"}} {...p} />; }
// figma: Mode=Dark Elevated, State=Unselected
export function TabButtonsTextModeDarkElevatedStateUnselected(p = {}) { return <TabButtonsText {...{"mode":"dark elevated","state":"unselected"}} {...p} />; }
// figma: Mode=Light, State=Selected
export function TabButtonsTextModeLightStateSelected(p = {}) { return <TabButtonsText {...{"mode":"light","state":"selected"}} {...p} />; }
// figma: Mode=Light, State=Unselected
export function TabButtonsTextModeLightStateUnselected(p = {}) { return <TabButtonsText {...{"mode":"light","state":"unselected"}} {...p} />; }
const __all = [TabButtonsTextModeDarkStateSelected, TabButtonsTextModeDarkElevatedStateSelected, TabButtonsTextModeDarkStateUnselected, TabButtonsTextModeDarkElevatedStateUnselected, TabButtonsTextModeLightStateSelected, TabButtonsTextModeLightStateUnselected];
export function TabButtonsTextVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default TabButtonsTextVariants;
