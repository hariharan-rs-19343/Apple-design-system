// Named exports for every Figma variant of ExamplesKeyboard2
import { ExamplesKeyboard2 } from '../../components/kit/ExamplesKeyboard2.jsx';
// figma: Type=Text (Upper Case)
export function ExamplesKeyboard2TypeTextUpperCase(p = {}) { return <ExamplesKeyboard2 {...{"type":"text (upper case)"}} {...p} />; }
// figma: Type=Text (Lower Case)
export function ExamplesKeyboard2TypeTextLowerCase(p = {}) { return <ExamplesKeyboard2 {...{"type":"text (lower case)"}} {...p} />; }
const __all = [ExamplesKeyboard2TypeTextUpperCase, ExamplesKeyboard2TypeTextLowerCase];
export function ExamplesKeyboard2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ExamplesKeyboard2Variants;
