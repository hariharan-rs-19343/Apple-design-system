// Named exports for every Figma variant of ReplaceButton
import { ReplaceButton } from '../../components/accessory-bars/ReplaceButton.jsx';
// figma: Mode=Light, State=Disabled
export function ReplaceButtonModeLightStateDisabled(p = {}) { return <ReplaceButton {...{"mode":"light","state":"disabled"}} {...p} />; }
// figma: Mode=Dark, State=Disabled
export function ReplaceButtonModeDarkStateDisabled(p = {}) { return <ReplaceButton {...{"mode":"dark","state":"disabled"}} {...p} />; }
// figma: Mode=Light, State=Default
export function ReplaceButtonModeLightStateDefault(p = {}) { return <ReplaceButton {...{"mode":"light","state":"default"}} {...p} />; }
// figma: Mode=Dark, State=Default
export function ReplaceButtonModeDarkStateDefault(p = {}) { return <ReplaceButton {...{"mode":"dark","state":"default"}} {...p} />; }
const __all = [ReplaceButtonModeLightStateDisabled, ReplaceButtonModeDarkStateDisabled, ReplaceButtonModeLightStateDefault, ReplaceButtonModeDarkStateDefault];
export function ReplaceButtonVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ReplaceButtonVariants;
