// Named exports for every Figma variant of TextFieldBackground
import { TextFieldBackground } from '../../components/alerts/TextFieldBackground.jsx';
// figma: Mode=Dark
export function TextFieldBackgroundModeDark(p = {}) { return <TextFieldBackground {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function TextFieldBackgroundModeLight(p = {}) { return <TextFieldBackground {...{"mode":"light"}} {...p} />; }
const __all = [TextFieldBackgroundModeDark, TextFieldBackgroundModeLight];
export function TextFieldBackgroundVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default TextFieldBackgroundVariants;
