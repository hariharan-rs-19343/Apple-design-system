// Named exports for every Figma variant of DateAndTimeCollapsed
import { DateAndTimeCollapsed } from '../../components/lists/DateAndTimeCollapsed.jsx';
// figma: State=Default
export function DateAndTimeCollapsedStateDefault(p = {}) { return <DateAndTimeCollapsed {...{"state":"default"}} {...p} />; }
// figma: State=Selected
export function DateAndTimeCollapsedStateSelected(p = {}) { return <DateAndTimeCollapsed {...{"state":"selected"}} {...p} />; }
const __all = [DateAndTimeCollapsedStateDefault, DateAndTimeCollapsedStateSelected];
export function DateAndTimeCollapsedVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default DateAndTimeCollapsedVariants;
