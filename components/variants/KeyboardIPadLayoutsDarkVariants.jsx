// Named exports for every Figma variant of KeyboardIPadLayoutsDark
import { KeyboardIPadLayoutsDark } from '../../components/keyboards-dark/KeyboardIPadLayoutsDark.jsx';
// figma: Type=Letters - Lowercase
export function KeyboardIPadLayoutsDarkTypeLettersLowercase(p = {}) { return <KeyboardIPadLayoutsDark {...{"type":"letters - lowercase"}} {...p} />; }
// figma: Type=Letters - Uppercase
export function KeyboardIPadLayoutsDarkTypeLettersUppercase(p = {}) { return <KeyboardIPadLayoutsDark {...{"type":"letters - uppercase"}} {...p} />; }
const __all = [KeyboardIPadLayoutsDarkTypeLettersLowercase, KeyboardIPadLayoutsDarkTypeLettersUppercase];
export function KeyboardIPadLayoutsDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default KeyboardIPadLayoutsDarkVariants;
