// Named exports for every Figma variant of KeysIPadUppercaseDarkVibrant
import { KeysIPadUppercaseDarkVibrant } from '../../components/keyboards-dark/KeysIPadUppercaseDarkVibrant.jsx';
// figma: Type=Punctuation
export function KeysIPadUppercaseDarkVibrantTypePunctuation(p = {}) { return <KeysIPadUppercaseDarkVibrant {...{"type":"punctuation"}} {...p} />; }
// figma: Type=Default
export function KeysIPadUppercaseDarkVibrantTypeDefault(p = {}) { return <KeysIPadUppercaseDarkVibrant {...{"type":"default"}} {...p} />; }
const __all = [KeysIPadUppercaseDarkVibrantTypePunctuation, KeysIPadUppercaseDarkVibrantTypeDefault];
export function KeysIPadUppercaseDarkVibrantVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default KeysIPadUppercaseDarkVibrantVariants;
