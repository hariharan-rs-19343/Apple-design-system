// Named exports for every Figma variant of KeyboardIPadLayouts
import { KeyboardIPadLayouts } from '../../components/keyboards/KeyboardIPadLayouts.jsx';
// figma: Mode=Dark, Type=Uppercase
export function KeyboardIPadLayoutsModeDarkTypeUppercase(p = {}) { return <KeyboardIPadLayouts {...{"mode":"dark","type":"uppercase"}} {...p} />; }
// figma: Mode=Dark, Type=Lowercase
export function KeyboardIPadLayoutsModeDarkTypeLowercase(p = {}) { return <KeyboardIPadLayouts {...{"mode":"dark","type":"lowercase"}} {...p} />; }
// figma: Mode=Light, Type=Uppercase
export function KeyboardIPadLayoutsModeLightTypeUppercase(p = {}) { return <KeyboardIPadLayouts {...{"mode":"light","type":"uppercase"}} {...p} />; }
// figma: Mode=Light, Type=Lowercase
export function KeyboardIPadLayoutsModeLightTypeLowercase(p = {}) { return <KeyboardIPadLayouts {...{"mode":"light","type":"lowercase"}} {...p} />; }
const __all = [KeyboardIPadLayoutsModeDarkTypeUppercase, KeyboardIPadLayoutsModeDarkTypeLowercase, KeyboardIPadLayoutsModeLightTypeUppercase, KeyboardIPadLayoutsModeLightTypeLowercase];
export function KeyboardIPadLayoutsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default KeyboardIPadLayoutsVariants;
