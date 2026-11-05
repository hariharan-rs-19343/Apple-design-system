// Named exports for every Figma variant of Day
import { Day } from '../../components/kit/Day.jsx';
// figma: State=Current and Selected
export function DayStateCurrentAndSelected(p = {}) { return <Day {...{"state":"current and selected"}} {...p} />; }
// figma: State=Selected
export function DayStateSelected(p = {}) { return <Day {...{"state":"selected"}} {...p} />; }
// figma: State=Current
export function DayStateCurrent(p = {}) { return <Day {...{"state":"current"}} {...p} />; }
// figma: State=Default
export function DayStateDefault(p = {}) { return <Day {...{"state":"default"}} {...p} />; }
// figma: State=Null
export function DayStateNull(p = {}) { return <Day {...{"state":"null"}} {...p} />; }
const __all = [DayStateCurrentAndSelected, DayStateSelected, DayStateCurrent, DayStateDefault, DayStateNull];
export function DayVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default DayVariants;
