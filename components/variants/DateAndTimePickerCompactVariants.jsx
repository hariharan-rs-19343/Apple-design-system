// Named exports for every Figma variant of DateAndTimePickerCompact
import { DateAndTimePickerCompact } from '../../components/pickers/DateAndTimePickerCompact.jsx';
// figma: Mode=Light, Type=Time
export function DateAndTimePickerCompactModeLightTypeTime(p = {}) { return <DateAndTimePickerCompact {...{"mode":"light","type":"time"}} {...p} />; }
// figma: Mode=Light, Type=Date
export function DateAndTimePickerCompactModeLightTypeDate(p = {}) { return <DateAndTimePickerCompact {...{"mode":"light","type":"date"}} {...p} />; }
// figma: Mode=Light, Type=Date and Time
export function DateAndTimePickerCompactModeLightTypeDateAndTime(p = {}) { return <DateAndTimePickerCompact {...{"mode":"light","type":"date and time"}} {...p} />; }
const __all = [DateAndTimePickerCompactModeLightTypeTime, DateAndTimePickerCompactModeLightTypeDate, DateAndTimePickerCompactModeLightTypeDateAndTime];
export function DateAndTimePickerCompactVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default DateAndTimePickerCompactVariants;
