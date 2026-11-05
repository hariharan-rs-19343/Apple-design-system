// Named exports for every Figma variant of DateAndTimePickerWheels
import { DateAndTimePickerWheels } from '../../components/pickers/DateAndTimePickerWheels.jsx';
// figma: Mode=Light, Type=Date
export function DateAndTimePickerWheelsModeLightTypeDate(p = {}) { return <DateAndTimePickerWheels {...{"mode":"light","type":"date"}} {...p} />; }
// figma: Mode=Light, Type=Time
export function DateAndTimePickerWheelsModeLightTypeTime(p = {}) { return <DateAndTimePickerWheels {...{"mode":"light","type":"time"}} {...p} />; }
const __all = [DateAndTimePickerWheelsModeLightTypeDate, DateAndTimePickerWheelsModeLightTypeTime];
export function DateAndTimePickerWheelsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default DateAndTimePickerWheelsVariants;
