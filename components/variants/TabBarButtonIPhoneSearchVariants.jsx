// Named exports for every Figma variant of TabBarButtonIPhoneSearch
import { TabBarButtonIPhoneSearch } from '../../components/tab-bars/TabBarButtonIPhoneSearch.jsx';
// figma: Selected=True, Mode=Light
export function TabBarButtonIPhoneSearchSelectedTrueModeLight(p = {}) { return <TabBarButtonIPhoneSearch {...{"selected":true,"mode":"light"}} {...p} />; }
// figma: Selected=False, Mode=Light
export function TabBarButtonIPhoneSearchSelectedFalseModeLight(p = {}) { return <TabBarButtonIPhoneSearch {...{"selected":false,"mode":"light"}} {...p} />; }
// figma: Selected=True, Mode=Dark
export function TabBarButtonIPhoneSearchSelectedTrueModeDark(p = {}) { return <TabBarButtonIPhoneSearch {...{"selected":true,"mode":"dark"}} {...p} />; }
// figma: Selected=False, Mode=Dark
export function TabBarButtonIPhoneSearchSelectedFalseModeDark(p = {}) { return <TabBarButtonIPhoneSearch {...{"selected":false,"mode":"dark"}} {...p} />; }
const __all = [TabBarButtonIPhoneSearchSelectedTrueModeLight, TabBarButtonIPhoneSearchSelectedFalseModeLight, TabBarButtonIPhoneSearchSelectedTrueModeDark, TabBarButtonIPhoneSearchSelectedFalseModeDark];
export function TabBarButtonIPhoneSearchVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default TabBarButtonIPhoneSearchVariants;
