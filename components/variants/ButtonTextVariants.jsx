// Named exports for every Figma variant of ButtonText
import { ButtonText } from '../../components/buttons/ButtonText.jsx';
// figma: Emphasized=true,Enabled=false
export function ButtonTextEmphasizedTrueEnabledFalse(p = {}) { return <ButtonText {...{"emphasized":true,"enabled":false}} {...p} />; }
// figma: Emphasized=false,Enabled=false
export function ButtonTextEmphasizedFalseEnabledFalse(p = {}) { return <ButtonText {...{"emphasized":false,"enabled":false}} {...p} />; }
// figma: Emphasized=true,Enabled=true
export function ButtonTextEmphasizedTrueEnabledTrue(p = {}) { return <ButtonText {...{"emphasized":true,"enabled":true}} {...p} />; }
// figma: Emphasized=false,Enabled=true
export function ButtonTextEmphasizedFalseEnabledTrue(p = {}) { return <ButtonText {...{"emphasized":false,"enabled":true}} {...p} />; }
const __all = [ButtonTextEmphasizedTrueEnabledFalse, ButtonTextEmphasizedFalseEnabledFalse, ButtonTextEmphasizedTrueEnabledTrue, ButtonTextEmphasizedFalseEnabledTrue];
export function ButtonTextVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ButtonTextVariants;
