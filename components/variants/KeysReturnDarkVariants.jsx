// Named exports for every Figma variant of KeysReturnDark
import { KeysReturnDark } from '../../components/keyboards-dark/KeysReturnDark.jsx';
// figma: Blue Color=On
export function KeysReturnDarkBlueColorOn(p = {}) { return <KeysReturnDark {...{"blueColor":"on"}} {...p} />; }
// figma: Blue Color=Off
export function KeysReturnDarkBlueColorOff(p = {}) { return <KeysReturnDark {...{"blueColor":"off"}} {...p} />; }
const __all = [KeysReturnDarkBlueColorOn, KeysReturnDarkBlueColorOff];
export function KeysReturnDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default KeysReturnDarkVariants;
