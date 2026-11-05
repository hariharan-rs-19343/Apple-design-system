// Named exports for every Figma variant of LabelSymbolPreferred
import { LabelSymbolPreferred } from '../../components/buttons/LabelSymbolPreferred.jsx';
// figma: Mode=Dark,State=Disabled
export function LabelSymbolPreferredModeDarkStateDisabled(p = {}) { return <LabelSymbolPreferred {...{"mode":"dark","state":"disabled"}} {...p} />; }
// figma: Mode=Dark,State=Default
export function LabelSymbolPreferredModeDarkStateDefault(p = {}) { return <LabelSymbolPreferred {...{"mode":"dark","state":"default"}} {...p} />; }
// figma: Mode=Light,State=Disabled
export function LabelSymbolPreferredModeLightStateDisabled(p = {}) { return <LabelSymbolPreferred {...{"mode":"light","state":"disabled"}} {...p} />; }
// figma: Mode=Light,State=Default
export function LabelSymbolPreferredModeLightStateDefault(p = {}) { return <LabelSymbolPreferred {...{"mode":"light","state":"default"}} {...p} />; }
const __all = [LabelSymbolPreferredModeDarkStateDisabled, LabelSymbolPreferredModeDarkStateDefault, LabelSymbolPreferredModeLightStateDisabled, LabelSymbolPreferredModeLightStateDefault];
export function LabelSymbolPreferredVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default LabelSymbolPreferredVariants;
