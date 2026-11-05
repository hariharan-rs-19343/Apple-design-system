// Named exports for every Figma variant of DateAndTimePickers
import { DateAndTimePickers } from '../../components/surfaces/DateAndTimePickers.jsx';
// figma: Style=Inline
export function DateAndTimePickersStyleInline(p = {}) { return <DateAndTimePickers {...{"style2":"inline"}} {...p} />; }
// figma: Style=Compact
export function DateAndTimePickersStyleCompact(p = {}) { return <DateAndTimePickers {...{"style2":"compact"}} {...p} />; }
const __all = [DateAndTimePickersStyleInline, DateAndTimePickersStyleCompact];
export function DateAndTimePickersVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default DateAndTimePickersVariants;
