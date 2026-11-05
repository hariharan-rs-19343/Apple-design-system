// Named exports for every Figma variant of KeysIPadReturn
import { KeysIPadReturn } from '../../components/keyboards/KeysIPadReturn.jsx';
// figma: Mode=Dark, Prominent=True
export function KeysIPadReturnModeDarkProminentTrue(p = {}) { return <KeysIPadReturn {...{"mode":"dark","prominent":true}} {...p} />; }
// figma: Mode=Dark, Prominent=False
export function KeysIPadReturnModeDarkProminentFalse(p = {}) { return <KeysIPadReturn {...{"mode":"dark","prominent":false}} {...p} />; }
// figma: Mode=Light, Prominent=True
export function KeysIPadReturnModeLightProminentTrue(p = {}) { return <KeysIPadReturn {...{"mode":"light","prominent":true}} {...p} />; }
// figma: Mode=Light, Prominent=False
export function KeysIPadReturnModeLightProminentFalse(p = {}) { return <KeysIPadReturn {...{"mode":"light","prominent":false}} {...p} />; }
const __all = [KeysIPadReturnModeDarkProminentTrue, KeysIPadReturnModeDarkProminentFalse, KeysIPadReturnModeLightProminentTrue, KeysIPadReturnModeLightProminentFalse];
export function KeysIPadReturnVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default KeysIPadReturnVariants;
