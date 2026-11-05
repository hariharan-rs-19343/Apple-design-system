// Named exports for every Figma variant of ActivityViewIPhone
import { ActivityViewIPhone } from '../../components/views/ActivityViewIPhone.jsx';
// figma: Mode=Dark
export function ActivityViewIPhoneModeDark(p = {}) { return <ActivityViewIPhone {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function ActivityViewIPhoneModeLight(p = {}) { return <ActivityViewIPhone {...{"mode":"light"}} {...p} />; }
const __all = [ActivityViewIPhoneModeDark, ActivityViewIPhoneModeLight];
export function ActivityViewIPhoneVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ActivityViewIPhoneVariants;
