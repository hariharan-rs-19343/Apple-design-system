// Named exports for every Figma variant of Time
import { Time } from '../../components/notifications/Time.jsx';
// figma: Mode=Dark
export function TimeModeDark(p = {}) { return <Time {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function TimeModeLight(p = {}) { return <Time {...{"mode":"light"}} {...p} />; }
const __all = [TimeModeDark, TimeModeLight];
export function TimeVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default TimeVariants;
