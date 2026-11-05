// Named exports for every Figma variant of FieldFind
import { FieldFind } from '../../components/fields/FieldFind.jsx';
// figma: Mode=Light, State=Text Entered
export function FieldFindModeLightStateTextEntered(p = {}) { return <FieldFind {...{"mode":"light","state":"text entered"}} {...p} />; }
// figma: Mode=Dark, State=Text Entered
export function FieldFindModeDarkStateTextEntered(p = {}) { return <FieldFind {...{"mode":"dark","state":"text entered"}} {...p} />; }
// figma: Mode=Light, State=Typing
export function FieldFindModeLightStateTyping(p = {}) { return <FieldFind {...{"mode":"light","state":"typing"}} {...p} />; }
// figma: Mode=Dark, State=Typing
export function FieldFindModeDarkStateTyping(p = {}) { return <FieldFind {...{"mode":"dark","state":"typing"}} {...p} />; }
// figma: Mode=Light, State=Focused
export function FieldFindModeLightStateFocused(p = {}) { return <FieldFind {...{"mode":"light","state":"focused"}} {...p} />; }
// figma: Mode=Dark, State=Focused
export function FieldFindModeDarkStateFocused(p = {}) { return <FieldFind {...{"mode":"dark","state":"focused"}} {...p} />; }
// figma: Mode=Light, State=Default
export function FieldFindModeLightStateDefault(p = {}) { return <FieldFind {...{"mode":"light","state":"default"}} {...p} />; }
// figma: Mode=Dark, State=Default
export function FieldFindModeDarkStateDefault(p = {}) { return <FieldFind {...{"mode":"dark","state":"default"}} {...p} />; }
const __all = [FieldFindModeLightStateTextEntered, FieldFindModeDarkStateTextEntered, FieldFindModeLightStateTyping, FieldFindModeDarkStateTyping, FieldFindModeLightStateFocused, FieldFindModeDarkStateFocused, FieldFindModeLightStateDefault, FieldFindModeDarkStateDefault];
export function FieldFindVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default FieldFindVariants;
