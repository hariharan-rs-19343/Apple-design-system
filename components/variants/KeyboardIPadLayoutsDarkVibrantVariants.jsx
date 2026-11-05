// Named exports for every Figma variant of KeyboardIPadLayoutsDarkVibrant
import { KeyboardIPadLayoutsDarkVibrant } from '../../components/keyboards-dark/KeyboardIPadLayoutsDarkVibrant.jsx';
// figma: Type=Letters - Lowercase
export function KeyboardIPadLayoutsDarkVibrantTypeLettersLowercase(p = {}) { return <KeyboardIPadLayoutsDarkVibrant {...{"type":"letters - lowercase"}} {...p} />; }
// figma: Type=Letters - Uppercase
export function KeyboardIPadLayoutsDarkVibrantTypeLettersUppercase(p = {}) { return <KeyboardIPadLayoutsDarkVibrant {...{"type":"letters - uppercase"}} {...p} />; }
const __all = [KeyboardIPadLayoutsDarkVibrantTypeLettersLowercase, KeyboardIPadLayoutsDarkVibrantTypeLettersUppercase];
export function KeyboardIPadLayoutsDarkVibrantVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default KeyboardIPadLayoutsDarkVibrantVariants;
