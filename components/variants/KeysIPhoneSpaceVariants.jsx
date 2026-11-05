// Named exports for every Figma variant of KeysIPhoneSpace
import { KeysIPhoneSpace } from '../../components/keyboards/KeysIPhoneSpace.jsx';
// figma: Mode=Dark, Config=URL
export function KeysIPhoneSpaceModeDarkConfigURL(p = {}) { return <KeysIPhoneSpace {...{"mode":"dark","config":"url"}} {...p} />; }
// figma: Mode=Dark, Config=Email
export function KeysIPhoneSpaceModeDarkConfigEmail(p = {}) { return <KeysIPhoneSpace {...{"mode":"dark","config":"email"}} {...p} />; }
// figma: Mode=Dark, Config=Default
export function KeysIPhoneSpaceModeDarkConfigDefault(p = {}) { return <KeysIPhoneSpace {...{"mode":"dark","config":"default"}} {...p} />; }
// figma: Mode=Light, Config=URL
export function KeysIPhoneSpaceModeLightConfigURL(p = {}) { return <KeysIPhoneSpace {...{"mode":"light","config":"url"}} {...p} />; }
// figma: Mode=Light, Config=Email
export function KeysIPhoneSpaceModeLightConfigEmail(p = {}) { return <KeysIPhoneSpace {...{"mode":"light","config":"email"}} {...p} />; }
// figma: Mode=Light, Config=Default
export function KeysIPhoneSpaceModeLightConfigDefault(p = {}) { return <KeysIPhoneSpace {...{"mode":"light","config":"default"}} {...p} />; }
const __all = [KeysIPhoneSpaceModeDarkConfigURL, KeysIPhoneSpaceModeDarkConfigEmail, KeysIPhoneSpaceModeDarkConfigDefault, KeysIPhoneSpaceModeLightConfigURL, KeysIPhoneSpaceModeLightConfigEmail, KeysIPhoneSpaceModeLightConfigDefault];
export function KeysIPhoneSpaceVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default KeysIPhoneSpaceVariants;
