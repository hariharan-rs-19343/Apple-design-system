// Named exports for every Figma variant of QuickActionIPad
import { QuickActionIPad } from '../../components/kit/QuickActionIPad.jsx';
// figma: Mode=Dark, Destructive=True
export function QuickActionIPadModeDarkDestructiveTrue(p = {}) { return <QuickActionIPad {...{"mode":"dark","destructive":true}} {...p} />; }
// figma: Mode=Dark, Destructive=False
export function QuickActionIPadModeDarkDestructiveFalse(p = {}) { return <QuickActionIPad {...{"mode":"dark","destructive":false}} {...p} />; }
// figma: Mode=Light, Destructive=True
export function QuickActionIPadModeLightDestructiveTrue(p = {}) { return <QuickActionIPad {...{"mode":"light","destructive":true}} {...p} />; }
// figma: Mode=Light, Destructive=False
export function QuickActionIPadModeLightDestructiveFalse(p = {}) { return <QuickActionIPad {...{"mode":"light","destructive":false}} {...p} />; }
const __all = [QuickActionIPadModeDarkDestructiveTrue, QuickActionIPadModeDarkDestructiveFalse, QuickActionIPadModeLightDestructiveTrue, QuickActionIPadModeLightDestructiveFalse];
export function QuickActionIPadVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default QuickActionIPadVariants;
