// Named exports for every Figma variant of LeadingIPhone
import { LeadingIPhone } from '../../components/labels/LeadingIPhone.jsx';
// figma: Mode=Light, State=Destructive
export function LeadingIPhoneModeLightStateDestructive(p = {}) { return <LeadingIPhone {...{"mode":"light","state":"destructive"}} {...p} />; }
// figma: Mode=Light, State=Disabled
export function LeadingIPhoneModeLightStateDisabled(p = {}) { return <LeadingIPhone {...{"mode":"light","state":"disabled"}} {...p} />; }
const __all = [LeadingIPhoneModeLightStateDestructive, LeadingIPhoneModeLightStateDisabled];
export function LeadingIPhoneVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default LeadingIPhoneVariants;
