// Named exports for every Figma variant of Previous
import { Previous } from '../../components/accessory-bars/Previous.jsx';
// figma: Mode=Light, Enabled=False
export function PreviousModeLightEnabledFalse(p = {}) { return <Previous {...{"mode":"light","enabled":false}} {...p} />; }
// figma: Mode=Dark, Enabled=False
export function PreviousModeDarkEnabledFalse(p = {}) { return <Previous {...{"mode":"dark","enabled":false}} {...p} />; }
// figma: Mode=Light, Enabled=True
export function PreviousModeLightEnabledTrue(p = {}) { return <Previous {...{"mode":"light","enabled":true}} {...p} />; }
// figma: Mode=Dark, Enabled=True
export function PreviousModeDarkEnabledTrue(p = {}) { return <Previous {...{"mode":"dark","enabled":true}} {...p} />; }
const __all = [PreviousModeLightEnabledFalse, PreviousModeDarkEnabledFalse, PreviousModeLightEnabledTrue, PreviousModeDarkEnabledTrue];
export function PreviousVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default PreviousVariants;
