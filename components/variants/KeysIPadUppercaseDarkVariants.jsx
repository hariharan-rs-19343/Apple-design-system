// Named exports for every Figma variant of KeysIPadUppercaseDark
import { KeysIPadUppercaseDark } from '../../components/keyboards-dark/KeysIPadUppercaseDark.jsx';
// figma: Type=Punctuation
export function KeysIPadUppercaseDarkTypePunctuation(p = {}) { return <KeysIPadUppercaseDark {...{"type":"punctuation"}} {...p} />; }
// figma: Type=Default
export function KeysIPadUppercaseDarkTypeDefault(p = {}) { return <KeysIPadUppercaseDark {...{"type":"default"}} {...p} />; }
const __all = [KeysIPadUppercaseDarkTypePunctuation, KeysIPadUppercaseDarkTypeDefault];
export function KeysIPadUppercaseDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default KeysIPadUppercaseDarkVariants;
