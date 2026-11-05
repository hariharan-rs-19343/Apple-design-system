// Named exports for every Figma variant of TrailingDark
import { TrailingDark } from '../../components/views/TrailingDark.jsx';
// figma: Type=Pop-up
export function TrailingDarkTypePopUp(p = {}) { return <TrailingDark {...{"type":"pop-up"}} {...p} />; }
// figma: Type=Button
export function TrailingDarkTypeButton(p = {}) { return <TrailingDark {...{"type":"button"}} {...p} />; }
// figma: Type=Stepper
export function TrailingDarkTypeStepper(p = {}) { return <TrailingDark {...{"type":"stepper"}} {...p} />; }
// figma: Type=Picker - Date
export function TrailingDarkTypePickerDate(p = {}) { return <TrailingDark {...{"type":"picker - date"}} {...p} />; }
// figma: Type=Picker - Time
export function TrailingDarkTypePickerTime(p = {}) { return <TrailingDark {...{"type":"picker - time"}} {...p} />; }
// figma: Type=Picker - Date and Time
export function TrailingDarkTypePickerDateAndTime(p = {}) { return <TrailingDark {...{"type":"picker - date and time"}} {...p} />; }
// figma: Type=Toggle
export function TrailingDarkTypeToggle(p = {}) { return <TrailingDark {...{"type":"toggle"}} {...p} />; }
// figma: Type=Disclosure
export function TrailingDarkTypeDisclosure(p = {}) { return <TrailingDark {...{"type":"disclosure"}} {...p} />; }
// figma: Type=Default
export function TrailingDarkTypeDefault(p = {}) { return <TrailingDark {...{"type":"default"}} {...p} />; }
const __all = [TrailingDarkTypePopUp, TrailingDarkTypeButton, TrailingDarkTypeStepper, TrailingDarkTypePickerDate, TrailingDarkTypePickerTime, TrailingDarkTypePickerDateAndTime, TrailingDarkTypeToggle, TrailingDarkTypeDisclosure, TrailingDarkTypeDefault];
export function TrailingDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default TrailingDarkVariants;
