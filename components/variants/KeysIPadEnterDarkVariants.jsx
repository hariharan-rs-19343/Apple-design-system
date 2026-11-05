// Named exports for every Figma variant of KeysIPadEnterDark
import { KeysIPadEnterDark } from '../../components/keyboards-dark/KeysIPadEnterDark.jsx';
// figma: Color=Blue
export function KeysIPadEnterDarkColorBlue(p = {}) { return <KeysIPadEnterDark {...{"color":"blue"}} {...p} />; }
// figma: Color=Default
export function KeysIPadEnterDarkColorDefault(p = {}) { return <KeysIPadEnterDark {...{"color":"default"}} {...p} />; }
const __all = [KeysIPadEnterDarkColorBlue, KeysIPadEnterDarkColorDefault];
export function KeysIPadEnterDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default KeysIPadEnterDarkVariants;
