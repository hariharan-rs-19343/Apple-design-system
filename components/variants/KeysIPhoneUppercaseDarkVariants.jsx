// Named exports for every Figma variant of KeysIPhoneUppercaseDark
import { KeysIPhoneUppercaseDark } from '../../components/keyboards-dark/KeysIPhoneUppercaseDark.jsx';
// figma: Style=Default (Currencies)
export function KeysIPhoneUppercaseDarkStyleDefaultCurrencies(p = {}) { return <KeysIPhoneUppercaseDark {...{"style2":"default (currencies)"}} {...p} />; }
// figma: Style=Default (Baseline Adjusted)
export function KeysIPhoneUppercaseDarkStyleDefaultBaselineAdjusted(p = {}) { return <KeysIPhoneUppercaseDark {...{"style2":"default (baseline adjusted)"}} {...p} />; }
// figma: Style=Default
export function KeysIPhoneUppercaseDarkStyleDefault(p = {}) { return <KeysIPhoneUppercaseDark {...{"style2":"default"}} {...p} />; }
const __all = [KeysIPhoneUppercaseDarkStyleDefaultCurrencies, KeysIPhoneUppercaseDarkStyleDefaultBaselineAdjusted, KeysIPhoneUppercaseDarkStyleDefault];
export function KeysIPhoneUppercaseDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default KeysIPhoneUppercaseDarkVariants;
