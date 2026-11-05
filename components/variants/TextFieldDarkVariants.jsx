// Named exports for every Figma variant of TextFieldDark
import { TextFieldDark } from '../../components/misc/TextFieldDark.jsx';
// figma: State=Text Entered
export function TextFieldDarkStateTextEntered(p = {}) { return <TextFieldDark {...{"state":"text entered"}} {...p} />; }
// figma: State=Focused
export function TextFieldDarkStateFocused(p = {}) { return <TextFieldDark {...{"state":"focused"}} {...p} />; }
const __all = [TextFieldDarkStateTextEntered, TextFieldDarkStateFocused];
export function TextFieldDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default TextFieldDarkVariants;
