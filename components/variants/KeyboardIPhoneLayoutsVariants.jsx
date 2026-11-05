// Named exports for every Figma variant of KeyboardIPhoneLayouts
import { KeyboardIPhoneLayouts } from '../../components/keyboards/KeyboardIPhoneLayouts.jsx';
// figma: Mode=Dark, Type=Characters
export function KeyboardIPhoneLayoutsModeDarkTypeCharacters(p = {}) { return <KeyboardIPhoneLayouts {...{"mode":"dark","type":"characters"}} {...p} />; }
// figma: Mode=Dark, Type=Numbers
export function KeyboardIPhoneLayoutsModeDarkTypeNumbers(p = {}) { return <KeyboardIPhoneLayouts {...{"mode":"dark","type":"numbers"}} {...p} />; }
// figma: Mode=Dark, Type=Letters - Uppercase
export function KeyboardIPhoneLayoutsModeDarkTypeLettersUppercase(p = {}) { return <KeyboardIPhoneLayouts {...{"mode":"dark","type":"letters - uppercase"}} {...p} />; }
// figma: Mode=Dark, Type=Letters - Lowercase
export function KeyboardIPhoneLayoutsModeDarkTypeLettersLowercase(p = {}) { return <KeyboardIPhoneLayouts {...{"mode":"dark","type":"letters - lowercase"}} {...p} />; }
// figma: Mode= Light, Type=Characters
export function KeyboardIPhoneLayoutsModeLightTypeCharacters(p = {}) { return <KeyboardIPhoneLayouts {...{"mode":"light","type":"characters"}} {...p} />; }
// figma: Mode= Light, Type=Numbers
export function KeyboardIPhoneLayoutsModeLightTypeNumbers(p = {}) { return <KeyboardIPhoneLayouts {...{"mode":"light","type":"numbers"}} {...p} />; }
// figma: Mode= Light, Type=Letters - Lowercase
export function KeyboardIPhoneLayoutsModeLightTypeLettersLowercase(p = {}) { return <KeyboardIPhoneLayouts {...{"mode":"light","type":"letters - lowercase"}} {...p} />; }
// figma: Mode= Light, Type=Letters - Uppercase
export function KeyboardIPhoneLayoutsModeLightTypeLettersUppercase(p = {}) { return <KeyboardIPhoneLayouts {...{"mode":"light","type":"letters - uppercase"}} {...p} />; }
const __all = [KeyboardIPhoneLayoutsModeDarkTypeCharacters, KeyboardIPhoneLayoutsModeDarkTypeNumbers, KeyboardIPhoneLayoutsModeDarkTypeLettersUppercase, KeyboardIPhoneLayoutsModeDarkTypeLettersLowercase, KeyboardIPhoneLayoutsModeLightTypeCharacters, KeyboardIPhoneLayoutsModeLightTypeNumbers, KeyboardIPhoneLayoutsModeLightTypeLettersLowercase, KeyboardIPhoneLayoutsModeLightTypeLettersUppercase];
export function KeyboardIPhoneLayoutsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default KeyboardIPhoneLayoutsVariants;
