// Named exports for every Figma variant of DateAndTimeWheels
import { DateAndTimeWheels } from '../../components/pickers/DateAndTimeWheels.jsx';
// figma: Type=Date
export function DateAndTimeWheelsTypeDate(p = {}) { return <DateAndTimeWheels {...{"type":"date"}} {...p} />; }
// figma: Type=Time
export function DateAndTimeWheelsTypeTime(p = {}) { return <DateAndTimeWheels {...{"type":"time"}} {...p} />; }
const __all = [DateAndTimeWheelsTypeDate, DateAndTimeWheelsTypeTime];
export function DateAndTimeWheelsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default DateAndTimeWheelsVariants;
