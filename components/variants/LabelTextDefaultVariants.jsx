// Named exports for every Figma variant of LabelTextDefault
import { LabelTextDefault } from '../../components/buttons/LabelTextDefault.jsx';
// figma: Mode=Dark, State=Disabled
export function LabelTextDefaultModeDarkStateDisabled(p = {}) { return <LabelTextDefault {...{"mode":"dark","state":"disabled"}} {...p} />; }
// figma: Mode=Dark, State=Default
export function LabelTextDefaultModeDarkStateDefault(p = {}) { return <LabelTextDefault {...{"mode":"dark","state":"default"}} {...p} />; }
// figma: Mode=Light, State=Disabled
export function LabelTextDefaultModeLightStateDisabled(p = {}) { return <LabelTextDefault {...{"mode":"light","state":"disabled"}} {...p} />; }
// figma: Mode=Light, State=Default
export function LabelTextDefaultModeLightStateDefault(p = {}) { return <LabelTextDefault {...{"mode":"light","state":"default"}} {...p} />; }
const __all = [LabelTextDefaultModeDarkStateDisabled, LabelTextDefaultModeDarkStateDefault, LabelTextDefaultModeLightStateDisabled, LabelTextDefaultModeLightStateDefault];
export function LabelTextDefaultVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default LabelTextDefaultVariants;
