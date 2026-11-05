// Named exports for every Figma variant of ActivityViewIPad
import { ActivityViewIPad } from '../../components/views/ActivityViewIPad.jsx';
// figma: Mode=Dark
export function ActivityViewIPadModeDark(p = {}) { return <ActivityViewIPad {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function ActivityViewIPadModeLight(p = {}) { return <ActivityViewIPad {...{"mode":"light"}} {...p} />; }
const __all = [ActivityViewIPadModeDark, ActivityViewIPadModeLight];
export function ActivityViewIPadVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ActivityViewIPadVariants;
