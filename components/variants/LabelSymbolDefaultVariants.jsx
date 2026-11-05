// Named exports for every Figma variant of LabelSymbolDefault
import { LabelSymbolDefault } from '../../components/buttons/LabelSymbolDefault.jsx';
// figma: Mode=Dark,State=Disabled
export function LabelSymbolDefaultModeDarkStateDisabled(p = {}) { return <LabelSymbolDefault {...{"mode":"dark","state":"disabled"}} {...p} />; }
// figma: Mode=Dark,State=Default
export function LabelSymbolDefaultModeDarkStateDefault(p = {}) { return <LabelSymbolDefault {...{"mode":"dark","state":"default"}} {...p} />; }
// figma: Mode=Light,State=Disabled
export function LabelSymbolDefaultModeLightStateDisabled(p = {}) { return <LabelSymbolDefault {...{"mode":"light","state":"disabled"}} {...p} />; }
// figma: Mode=Light,State=Default
export function LabelSymbolDefaultModeLightStateDefault(p = {}) { return <LabelSymbolDefault {...{"mode":"light","state":"default"}} {...p} />; }
const __all = [LabelSymbolDefaultModeDarkStateDisabled, LabelSymbolDefaultModeDarkStateDefault, LabelSymbolDefaultModeLightStateDisabled, LabelSymbolDefaultModeLightStateDefault];
export function LabelSymbolDefaultVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default LabelSymbolDefaultVariants;
