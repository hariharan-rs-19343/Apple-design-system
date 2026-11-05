// Named exports for every Figma variant of TextField2
import { TextField2 } from '../../components/text-fields/TextField2.jsx';
// figma: State=Placeholder
export function TextField2StatePlaceholder(p = {}) { return <TextField2 {...{"state":"placeholder"}} {...p} />; }
// figma: State=Focused
export function TextField2StateFocused(p = {}) { return <TextField2 {...{"state":"focused"}} {...p} />; }
// figma: State=Value Entered
export function TextField2StateValueEntered(p = {}) { return <TextField2 {...{"state":"value entered"}} {...p} />; }
// figma: State=Typing
export function TextField2StateTyping(p = {}) { return <TextField2 {...{"state":"typing"}} {...p} />; }
const __all = [TextField2StatePlaceholder, TextField2StateFocused, TextField2StateValueEntered, TextField2StateTyping];
export function TextField2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default TextField2Variants;
