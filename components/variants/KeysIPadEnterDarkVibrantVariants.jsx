// Named exports for every Figma variant of KeysIPadEnterDarkVibrant
import { KeysIPadEnterDarkVibrant } from '../../components/keyboards-dark/KeysIPadEnterDarkVibrant.jsx';
// figma: Color=Blue
export function KeysIPadEnterDarkVibrantColorBlue(p = {}) { return <KeysIPadEnterDarkVibrant {...{"color":"blue"}} {...p} />; }
// figma: Color=Default
export function KeysIPadEnterDarkVibrantColorDefault(p = {}) { return <KeysIPadEnterDarkVibrant {...{"color":"default"}} {...p} />; }
const __all = [KeysIPadEnterDarkVibrantColorBlue, KeysIPadEnterDarkVibrantColorDefault];
export function KeysIPadEnterDarkVibrantVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default KeysIPadEnterDarkVibrantVariants;
