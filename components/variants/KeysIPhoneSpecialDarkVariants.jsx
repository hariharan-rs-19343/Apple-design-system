// Named exports for every Figma variant of KeysIPhoneSpecialDark
import { KeysIPhoneSpecialDark } from '../../components/keyboards-dark/KeysIPhoneSpecialDark.jsx';
// figma: Type=Shift (Locked)
export function KeysIPhoneSpecialDarkTypeShiftLocked(p = {}) { return <KeysIPhoneSpecialDark {...{"type":"shift (locked)"}} {...p} />; }
// figma: Type=Shift
export function KeysIPhoneSpecialDarkTypeShift(p = {}) { return <KeysIPhoneSpecialDark {...{"type":"shift"}} {...p} />; }
// figma: Type=Keyboard#
export function KeysIPhoneSpecialDarkTypeKeyboard(p = {}) { return <KeysIPhoneSpecialDark {...{"type":"keyboard#"}} {...p} />; }
// figma: Type=Numbers
export function KeysIPhoneSpecialDarkTypeNumbers(p = {}) { return <KeysIPhoneSpecialDark {...{"type":"numbers"}} {...p} />; }
// figma: Type=Delete
export function KeysIPhoneSpecialDarkTypeDelete(p = {}) { return <KeysIPhoneSpecialDark {...{"type":"delete"}} {...p} />; }
// figma: Type=Keyboard ABC
export function KeysIPhoneSpecialDarkTypeKeyboardABC(p = {}) { return <KeysIPhoneSpecialDark {...{"type":"keyboard abc"}} {...p} />; }
// figma: Type=Space
export function KeysIPhoneSpecialDarkTypeSpace(p = {}) { return <KeysIPhoneSpecialDark {...{"type":"space"}} {...p} />; }
const __all = [KeysIPhoneSpecialDarkTypeShiftLocked, KeysIPhoneSpecialDarkTypeShift, KeysIPhoneSpecialDarkTypeKeyboard, KeysIPhoneSpecialDarkTypeNumbers, KeysIPhoneSpecialDarkTypeDelete, KeysIPhoneSpecialDarkTypeKeyboardABC, KeysIPhoneSpecialDarkTypeSpace];
export function KeysIPhoneSpecialDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default KeysIPhoneSpecialDarkVariants;
