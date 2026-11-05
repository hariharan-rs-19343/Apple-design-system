// Named exports for every Figma variant of KeyboardIPhoneLayoutsDark
import { KeyboardIPhoneLayoutsDark } from '../../components/keyboards-dark/KeyboardIPhoneLayoutsDark.jsx';
// figma: Type=Characters
export function KeyboardIPhoneLayoutsDarkTypeCharacters(p = {}) { return <KeyboardIPhoneLayoutsDark {...{"type":"characters"}} {...p} />; }
// figma: Type=Numbers
export function KeyboardIPhoneLayoutsDarkTypeNumbers(p = {}) { return <KeyboardIPhoneLayoutsDark {...{"type":"numbers"}} {...p} />; }
// figma: Type=Letters - Uppercase
export function KeyboardIPhoneLayoutsDarkTypeLettersUppercase(p = {}) { return <KeyboardIPhoneLayoutsDark {...{"type":"letters - uppercase"}} {...p} />; }
// figma: Type=Letters - Lowercase
export function KeyboardIPhoneLayoutsDarkTypeLettersLowercase(p = {}) { return <KeyboardIPhoneLayoutsDark {...{"type":"letters - lowercase"}} {...p} />; }
const __all = [KeyboardIPhoneLayoutsDarkTypeCharacters, KeyboardIPhoneLayoutsDarkTypeNumbers, KeyboardIPhoneLayoutsDarkTypeLettersUppercase, KeyboardIPhoneLayoutsDarkTypeLettersLowercase];
export function KeyboardIPhoneLayoutsDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default KeyboardIPhoneLayoutsDarkVariants;
