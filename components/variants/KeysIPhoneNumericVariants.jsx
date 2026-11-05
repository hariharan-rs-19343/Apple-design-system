// Named exports for every Figma variant of KeysIPhoneNumeric
import { KeysIPhoneNumeric } from '../../components/keyboards-dark/KeysIPhoneNumeric.jsx';
// figma: Mode=Dark, Type=Math
export function KeysIPhoneNumericModeDarkTypeMath(p = {}) { return <KeysIPhoneNumeric {...{"mode":"dark","type":"math"}} {...p} />; }
// figma: Mode=Light, Type=Math
export function KeysIPhoneNumericModeLightTypeMath(p = {}) { return <KeysIPhoneNumeric {...{"mode":"light","type":"math"}} {...p} />; }
// figma: Mode=Dark, Type=Number
export function KeysIPhoneNumericModeDarkTypeNumber(p = {}) { return <KeysIPhoneNumeric {...{"mode":"dark","type":"number"}} {...p} />; }
// figma: Mode=Light, Type=Number
export function KeysIPhoneNumericModeLightTypeNumber(p = {}) { return <KeysIPhoneNumeric {...{"mode":"light","type":"number"}} {...p} />; }
// figma: Mode=Dark, Type=Number + ABC
export function KeysIPhoneNumericModeDarkTypeNumberABC(p = {}) { return <KeysIPhoneNumeric {...{"mode":"dark","type":"number + abc"}} {...p} />; }
// figma: Mode=Light, Type=Number + ABC
export function KeysIPhoneNumericModeLightTypeNumberABC(p = {}) { return <KeysIPhoneNumeric {...{"mode":"light","type":"number + abc"}} {...p} />; }
const __all = [KeysIPhoneNumericModeDarkTypeMath, KeysIPhoneNumericModeLightTypeMath, KeysIPhoneNumericModeDarkTypeNumber, KeysIPhoneNumericModeLightTypeNumber, KeysIPhoneNumericModeDarkTypeNumberABC, KeysIPhoneNumericModeLightTypeNumberABC];
export function KeysIPhoneNumericVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default KeysIPhoneNumericVariants;
