// Named exports for every Figma variant of TrailingLight
import { TrailingLight } from '../../components/text-fields/TrailingLight.jsx';
// figma: Type=Pop-up
export function TrailingLightTypePopUp(p = {}) { return <TrailingLight {...{"type":"pop-up"}} {...p} />; }
// figma: Type=Button
export function TrailingLightTypeButton(p = {}) { return <TrailingLight {...{"type":"button"}} {...p} />; }
// figma: Type=Stepper
export function TrailingLightTypeStepper(p = {}) { return <TrailingLight {...{"type":"stepper"}} {...p} />; }
// figma: Type=Picker - Date
export function TrailingLightTypePickerDate(p = {}) { return <TrailingLight {...{"type":"picker - date"}} {...p} />; }
// figma: Type=Picker - Time
export function TrailingLightTypePickerTime(p = {}) { return <TrailingLight {...{"type":"picker - time"}} {...p} />; }
// figma: Type=Picker - Date and Time
export function TrailingLightTypePickerDateAndTime(p = {}) { return <TrailingLight {...{"type":"picker - date and time"}} {...p} />; }
// figma: Type=Toggle
export function TrailingLightTypeToggle(p = {}) { return <TrailingLight {...{"type":"toggle"}} {...p} />; }
// figma: Type=Disclosure
export function TrailingLightTypeDisclosure(p = {}) { return <TrailingLight {...{"type":"disclosure"}} {...p} />; }
// figma: Type=Default
export function TrailingLightTypeDefault(p = {}) { return <TrailingLight {...{"type":"default"}} {...p} />; }
const __all = [TrailingLightTypePopUp, TrailingLightTypeButton, TrailingLightTypeStepper, TrailingLightTypePickerDate, TrailingLightTypePickerTime, TrailingLightTypePickerDateAndTime, TrailingLightTypeToggle, TrailingLightTypeDisclosure, TrailingLightTypeDefault];
export function TrailingLightVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default TrailingLightVariants;
