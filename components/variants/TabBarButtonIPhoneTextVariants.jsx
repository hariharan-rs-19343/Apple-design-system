// Named exports for every Figma variant of TabBarButtonIPhoneText
import { TabBarButtonIPhoneText } from '../../components/tab-bars/TabBarButtonIPhoneText.jsx';
// figma: Selected=True, Mode=Light
export function TabBarButtonIPhoneTextSelectedTrueModeLight(p = {}) { return <TabBarButtonIPhoneText {...{"selected":true,"mode":"light"}} {...p} />; }
// figma: Selected=False, Mode=Light
export function TabBarButtonIPhoneTextSelectedFalseModeLight(p = {}) { return <TabBarButtonIPhoneText {...{"selected":false,"mode":"light"}} {...p} />; }
// figma: Selected=True, Mode=Dark
export function TabBarButtonIPhoneTextSelectedTrueModeDark(p = {}) { return <TabBarButtonIPhoneText {...{"selected":true,"mode":"dark"}} {...p} />; }
// figma: Selected=False, Mode=Dark
export function TabBarButtonIPhoneTextSelectedFalseModeDark(p = {}) { return <TabBarButtonIPhoneText {...{"selected":false,"mode":"dark"}} {...p} />; }
const __all = [TabBarButtonIPhoneTextSelectedTrueModeLight, TabBarButtonIPhoneTextSelectedFalseModeLight, TabBarButtonIPhoneTextSelectedTrueModeDark, TabBarButtonIPhoneTextSelectedFalseModeDark];
export function TabBarButtonIPhoneTextVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default TabBarButtonIPhoneTextVariants;
