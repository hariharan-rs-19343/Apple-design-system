// Named exports for every Figma variant of LabelTextPreferred
import { LabelTextPreferred } from '../../components/buttons/LabelTextPreferred.jsx';
// figma: Mode=Dark,State=Disabled
export function LabelTextPreferredModeDarkStateDisabled(p = {}) { return <LabelTextPreferred {...{"mode":"dark","state":"disabled"}} {...p} />; }
// figma: Mode=Dark,State=Default
export function LabelTextPreferredModeDarkStateDefault(p = {}) { return <LabelTextPreferred {...{"mode":"dark","state":"default"}} {...p} />; }
// figma: Mode=Light,State=Disabled
export function LabelTextPreferredModeLightStateDisabled(p = {}) { return <LabelTextPreferred {...{"mode":"light","state":"disabled"}} {...p} />; }
// figma: Mode=Light,State=Default
export function LabelTextPreferredModeLightStateDefault(p = {}) { return <LabelTextPreferred {...{"mode":"light","state":"default"}} {...p} />; }
const __all = [LabelTextPreferredModeDarkStateDisabled, LabelTextPreferredModeDarkStateDefault, LabelTextPreferredModeLightStateDisabled, LabelTextPreferredModeLightStateDefault];
export function LabelTextPreferredVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default LabelTextPreferredVariants;
