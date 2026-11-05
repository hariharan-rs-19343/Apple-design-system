// Named exports for every Figma variant of ExamplesKeyboard
import { ExamplesKeyboard } from '../../components/kit/ExamplesKeyboard.jsx';
// figma: Type=Find and Replace
export function ExamplesKeyboardTypeFindAndReplace(p = {}) { return <ExamplesKeyboard {...{"type":"find and replace"}} {...p} />; }
// figma: Type=Find
export function ExamplesKeyboardTypeFind(p = {}) { return <ExamplesKeyboard {...{"type":"find"}} {...p} />; }
// figma: Type=Emoji
export function ExamplesKeyboardTypeEmoji(p = {}) { return <ExamplesKeyboard {...{"type":"emoji"}} {...p} />; }
// figma: Type=Numeric
export function ExamplesKeyboardTypeNumeric(p = {}) { return <ExamplesKeyboard {...{"type":"numeric"}} {...p} />; }
// figma: Type=Text
export function ExamplesKeyboardTypeText(p = {}) { return <ExamplesKeyboard {...{"type":"text"}} {...p} />; }
const __all = [ExamplesKeyboardTypeFindAndReplace, ExamplesKeyboardTypeFind, ExamplesKeyboardTypeEmoji, ExamplesKeyboardTypeNumeric, ExamplesKeyboardTypeText];
export function ExamplesKeyboardVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ExamplesKeyboardVariants;
