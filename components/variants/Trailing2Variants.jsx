// Named exports for every Figma variant of Trailing2
import { Trailing2 } from '../../components/lists/Trailing2.jsx';
// figma: Type=Pop-up
export function Trailing2TypePopUp(p = {}) { return <Trailing2 {...{"type":"pop-up"}} {...p} />; }
// figma: Type=Button
export function Trailing2TypeButton(p = {}) { return <Trailing2 {...{"type":"button"}} {...p} />; }
// figma: Type=Stepper
export function Trailing2TypeStepper(p = {}) { return <Trailing2 {...{"type":"stepper"}} {...p} />; }
// figma: Type=Picker - Date
export function Trailing2TypePickerDate(p = {}) { return <Trailing2 {...{"type":"picker - date"}} {...p} />; }
// figma: Type=Picker - Time
export function Trailing2TypePickerTime(p = {}) { return <Trailing2 {...{"type":"picker - time"}} {...p} />; }
// figma: Type=Picker - Date and Time
export function Trailing2TypePickerDateAndTime(p = {}) { return <Trailing2 {...{"type":"picker - date and time"}} {...p} />; }
// figma: Type=Toggle
export function Trailing2TypeToggle(p = {}) { return <Trailing2 {...{"type":"toggle"}} {...p} />; }
// figma: Type=Disclosure
export function Trailing2TypeDisclosure(p = {}) { return <Trailing2 {...{"type":"disclosure"}} {...p} />; }
// figma: Type=Default
export function Trailing2TypeDefault(p = {}) { return <Trailing2 {...{"type":"default"}} {...p} />; }
const __all = [Trailing2TypePopUp, Trailing2TypeButton, Trailing2TypeStepper, Trailing2TypePickerDate, Trailing2TypePickerTime, Trailing2TypePickerDateAndTime, Trailing2TypeToggle, Trailing2TypeDisclosure, Trailing2TypeDefault];
export function Trailing2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default Trailing2Variants;
