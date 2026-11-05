// Named exports for every Figma variant of FieldReplace
import { FieldReplace } from '../../components/fields/FieldReplace.jsx';
// figma: Mode=Light, State=Text Entered
export function FieldReplaceModeLightStateTextEntered(p = {}) { return <FieldReplace {...{"mode":"light","state":"text entered"}} {...p} />; }
// figma: Mode=Dark, State=Text Entered
export function FieldReplaceModeDarkStateTextEntered(p = {}) { return <FieldReplace {...{"mode":"dark","state":"text entered"}} {...p} />; }
// figma: Mode=Light, State=Typing
export function FieldReplaceModeLightStateTyping(p = {}) { return <FieldReplace {...{"mode":"light","state":"typing"}} {...p} />; }
// figma: Mode=Dark, State=Typing
export function FieldReplaceModeDarkStateTyping(p = {}) { return <FieldReplace {...{"mode":"dark","state":"typing"}} {...p} />; }
// figma: Mode=Light, State=Focused
export function FieldReplaceModeLightStateFocused(p = {}) { return <FieldReplace {...{"mode":"light","state":"focused"}} {...p} />; }
// figma: Mode=Dark, State=Focused
export function FieldReplaceModeDarkStateFocused(p = {}) { return <FieldReplace {...{"mode":"dark","state":"focused"}} {...p} />; }
// figma: Mode=Light, State=Default
export function FieldReplaceModeLightStateDefault(p = {}) { return <FieldReplace {...{"mode":"light","state":"default"}} {...p} />; }
// figma: Mode=Dark, State=Default
export function FieldReplaceModeDarkStateDefault(p = {}) { return <FieldReplace {...{"mode":"dark","state":"default"}} {...p} />; }
const __all = [FieldReplaceModeLightStateTextEntered, FieldReplaceModeDarkStateTextEntered, FieldReplaceModeLightStateTyping, FieldReplaceModeDarkStateTyping, FieldReplaceModeLightStateFocused, FieldReplaceModeDarkStateFocused, FieldReplaceModeLightStateDefault, FieldReplaceModeDarkStateDefault];
export function FieldReplaceVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default FieldReplaceVariants;
