// Named exports for every Figma variant of TabBarButtonIPadSymbol
import { TabBarButtonIPadSymbol } from '../../components/tab-bars/TabBarButtonIPadSymbol.jsx';
// figma: Selected=False, Mode=Light
export function TabBarButtonIPadSymbolSelectedFalseModeLight(p = {}) { return <TabBarButtonIPadSymbol {...{"selected":false,"mode":"light"}} {...p} />; }
// figma: Selected=True, Mode=Light
export function TabBarButtonIPadSymbolSelectedTrueModeLight(p = {}) { return <TabBarButtonIPadSymbol {...{"selected":true,"mode":"light"}} {...p} />; }
// figma: Mode=Dark,Selected=False
export function TabBarButtonIPadSymbolModeDarkSelectedFalse(p = {}) { return <TabBarButtonIPadSymbol {...{"selected":false,"mode":"dark"}} {...p} />; }
// figma: Mode=Dark,Selected=True
export function TabBarButtonIPadSymbolModeDarkSelectedTrue(p = {}) { return <TabBarButtonIPadSymbol {...{"selected":true,"mode":"dark"}} {...p} />; }
const __all = [TabBarButtonIPadSymbolSelectedFalseModeLight, TabBarButtonIPadSymbolSelectedTrueModeLight, TabBarButtonIPadSymbolModeDarkSelectedFalse, TabBarButtonIPadSymbolModeDarkSelectedTrue];
export function TabBarButtonIPadSymbolVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default TabBarButtonIPadSymbolVariants;
