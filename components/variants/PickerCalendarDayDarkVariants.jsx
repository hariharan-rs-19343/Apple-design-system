// Named exports for every Figma variant of PickerCalendarDayDark
import { PickerCalendarDayDark } from '../../components/kit/PickerCalendarDayDark.jsx';
// figma: State=Selected
export function PickerCalendarDayDarkStateSelected(p = {}) { return <PickerCalendarDayDark {...{"state":"selected"}} {...p} />; }
// figma: State=Current and Selected
export function PickerCalendarDayDarkStateCurrentAndSelected(p = {}) { return <PickerCalendarDayDark {...{"state":"current and selected"}} {...p} />; }
// figma: State=Current
export function PickerCalendarDayDarkStateCurrent(p = {}) { return <PickerCalendarDayDark {...{"state":"current"}} {...p} />; }
// figma: State=Default
export function PickerCalendarDayDarkStateDefault(p = {}) { return <PickerCalendarDayDark {...{"state":"default"}} {...p} />; }
// figma: State=Null
export function PickerCalendarDayDarkStateNull(p = {}) { return <PickerCalendarDayDark {...{"state":"null"}} {...p} />; }
const __all = [PickerCalendarDayDarkStateSelected, PickerCalendarDayDarkStateCurrentAndSelected, PickerCalendarDayDarkStateCurrent, PickerCalendarDayDarkStateDefault, PickerCalendarDayDarkStateNull];
export function PickerCalendarDayDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default PickerCalendarDayDarkVariants;
