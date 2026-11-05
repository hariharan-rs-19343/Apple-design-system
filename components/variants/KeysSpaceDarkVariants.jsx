// Named exports for every Figma variant of KeysSpaceDark
import { KeysSpaceDark } from '../../components/keyboards-dark/KeysSpaceDark.jsx';
// figma: Config=URL
export function KeysSpaceDarkConfigURL(p = {}) { return <KeysSpaceDark {...{"config":"url"}} {...p} />; }
// figma: Config=Email
export function KeysSpaceDarkConfigEmail(p = {}) { return <KeysSpaceDark {...{"config":"email"}} {...p} />; }
// figma: Config=Default
export function KeysSpaceDarkConfigDefault(p = {}) { return <KeysSpaceDark {...{"config":"default"}} {...p} />; }
const __all = [KeysSpaceDarkConfigURL, KeysSpaceDarkConfigEmail, KeysSpaceDarkConfigDefault];
export function KeysSpaceDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default KeysSpaceDarkVariants;
