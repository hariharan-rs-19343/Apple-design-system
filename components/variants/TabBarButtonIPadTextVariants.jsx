// Named exports for every Figma variant of TabBarButtonIPadText
import { TabBarButtonIPadText } from '../../components/tab-bars/TabBarButtonIPadText.jsx';
// figma: Selected=False, Mode=Light
export function TabBarButtonIPadTextSelectedFalseModeLight(p = {}) { return <TabBarButtonIPadText {...{"selected":false,"mode":"light"}} {...p} />; }
// figma: Selected=True, Mode=Light
export function TabBarButtonIPadTextSelectedTrueModeLight(p = {}) { return <TabBarButtonIPadText {...{"selected":true,"mode":"light"}} {...p} />; }
// figma: Selected=False, Mode=Dark
export function TabBarButtonIPadTextSelectedFalseModeDark(p = {}) { return <TabBarButtonIPadText {...{"selected":false,"mode":"dark"}} {...p} />; }
// figma: Selected=True, Mode=Dark
export function TabBarButtonIPadTextSelectedTrueModeDark(p = {}) { return <TabBarButtonIPadText {...{"selected":true,"mode":"dark"}} {...p} />; }
const __all = [TabBarButtonIPadTextSelectedFalseModeLight, TabBarButtonIPadTextSelectedTrueModeLight, TabBarButtonIPadTextSelectedFalseModeDark, TabBarButtonIPadTextSelectedTrueModeDark];
export function TabBarButtonIPadTextVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default TabBarButtonIPadTextVariants;
