// Named exports for every Figma variant of QuickActionIPhone
import { QuickActionIPhone } from '../../components/menus/QuickActionIPhone.jsx';
// figma: Mode=Dark, Destructive=True
export function QuickActionIPhoneModeDarkDestructiveTrue(p = {}) { return <QuickActionIPhone {...{"mode":"dark","destructive":true}} {...p} />; }
// figma: Mode=Dark, Destructive=False
export function QuickActionIPhoneModeDarkDestructiveFalse(p = {}) { return <QuickActionIPhone {...{"mode":"dark","destructive":false}} {...p} />; }
// figma: Mode=Light, Destructive=True
export function QuickActionIPhoneModeLightDestructiveTrue(p = {}) { return <QuickActionIPhone {...{"mode":"light","destructive":true}} {...p} />; }
// figma: Mode=Light, Destructive=False
export function QuickActionIPhoneModeLightDestructiveFalse(p = {}) { return <QuickActionIPhone {...{"mode":"light","destructive":false}} {...p} />; }
const __all = [QuickActionIPhoneModeDarkDestructiveTrue, QuickActionIPhoneModeDarkDestructiveFalse, QuickActionIPhoneModeLightDestructiveTrue, QuickActionIPhoneModeLightDestructiveFalse];
export function QuickActionIPhoneVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default QuickActionIPhoneVariants;
