// Named exports for every Figma variant of TabButtonsSymbol
import { TabButtonsSymbol } from '../../components/tab-bars/TabButtonsSymbol.jsx';
// figma: Mode=Dark, State=Selected
export function TabButtonsSymbolModeDarkStateSelected(p = {}) { return <TabButtonsSymbol {...{"mode":"dark","state":"selected"}} {...p} />; }
// figma: Mode=Dark Elevated, State=Selected
export function TabButtonsSymbolModeDarkElevatedStateSelected(p = {}) { return <TabButtonsSymbol {...{"mode":"dark elevated","state":"selected"}} {...p} />; }
// figma: Mode=Dark, State=Unselected
export function TabButtonsSymbolModeDarkStateUnselected(p = {}) { return <TabButtonsSymbol {...{"mode":"dark","state":"unselected"}} {...p} />; }
// figma: Mode=Dark Elevated, State=Unselected
export function TabButtonsSymbolModeDarkElevatedStateUnselected(p = {}) { return <TabButtonsSymbol {...{"mode":"dark elevated","state":"unselected"}} {...p} />; }
// figma: Mode=Light, State=Selected
export function TabButtonsSymbolModeLightStateSelected(p = {}) { return <TabButtonsSymbol {...{"mode":"light","state":"selected"}} {...p} />; }
// figma: Mode=Light, State=Unselected
export function TabButtonsSymbolModeLightStateUnselected(p = {}) { return <TabButtonsSymbol {...{"mode":"light","state":"unselected"}} {...p} />; }
const __all = [TabButtonsSymbolModeDarkStateSelected, TabButtonsSymbolModeDarkElevatedStateSelected, TabButtonsSymbolModeDarkStateUnselected, TabButtonsSymbolModeDarkElevatedStateUnselected, TabButtonsSymbolModeLightStateSelected, TabButtonsSymbolModeLightStateUnselected];
export function TabButtonsSymbolVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default TabButtonsSymbolVariants;
