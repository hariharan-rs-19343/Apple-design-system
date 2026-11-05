// Named exports for every Figma variant of Next
import { Next } from '../../components/fields/Next.jsx';
// figma: Mode=Light, Enabled=False
export function NextModeLightEnabledFalse(p = {}) { return <Next {...{"mode":"light","enabled":false}} {...p} />; }
// figma: Mode=Dark, Enabled=False
export function NextModeDarkEnabledFalse(p = {}) { return <Next {...{"mode":"dark","enabled":false}} {...p} />; }
// figma: Mode=Light, Enabled=True
export function NextModeLightEnabledTrue(p = {}) { return <Next {...{"mode":"light","enabled":true}} {...p} />; }
// figma: Mode=Dark, Enabled=True
export function NextModeDarkEnabledTrue(p = {}) { return <Next {...{"mode":"dark","enabled":true}} {...p} />; }
const __all = [NextModeLightEnabledFalse, NextModeDarkEnabledFalse, NextModeLightEnabledTrue, NextModeDarkEnabledTrue];
export function NextVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default NextVariants;
