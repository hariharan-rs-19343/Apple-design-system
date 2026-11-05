// Named exports for every Figma variant of KeysIPhone2
import { KeysIPhone2 } from '../../components/kit/KeysIPhone2.jsx';
// figma: Mode=Dark Elevated, State=Emphasized
export function KeysIPhone2ModeDarkElevatedStateEmphasized(p = {}) { return <KeysIPhone2 {...{"mode":"dark elevated","state":"emphasized"}} {...p} />; }
// figma: Mode=Dark Elevated, State=Normal
export function KeysIPhone2ModeDarkElevatedStateNormal(p = {}) { return <KeysIPhone2 {...{"mode":"dark elevated","state":"normal"}} {...p} />; }
// figma: Mode=Dark, State=Emphasized
export function KeysIPhone2ModeDarkStateEmphasized(p = {}) { return <KeysIPhone2 {...{"mode":"dark","state":"emphasized"}} {...p} />; }
// figma: Mode=Dark, State=Normal
export function KeysIPhone2ModeDarkStateNormal(p = {}) { return <KeysIPhone2 {...{"mode":"dark","state":"normal"}} {...p} />; }
// figma: Mode=Light, State=Emphasized
export function KeysIPhone2ModeLightStateEmphasized(p = {}) { return <KeysIPhone2 {...{"mode":"light","state":"emphasized"}} {...p} />; }
// figma: Mode=Light, State=Normal
export function KeysIPhone2ModeLightStateNormal(p = {}) { return <KeysIPhone2 {...{"mode":"light","state":"normal"}} {...p} />; }
const __all = [KeysIPhone2ModeDarkElevatedStateEmphasized, KeysIPhone2ModeDarkElevatedStateNormal, KeysIPhone2ModeDarkStateEmphasized, KeysIPhone2ModeDarkStateNormal, KeysIPhone2ModeLightStateEmphasized, KeysIPhone2ModeLightStateNormal];
export function KeysIPhone2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default KeysIPhone2Variants;
