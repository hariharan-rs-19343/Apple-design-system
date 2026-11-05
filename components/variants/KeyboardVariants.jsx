// Named exports for every Figma variant of Keyboard
import { Keyboard } from '../../components/kit/Keyboard.jsx';
// figma: Type=Numbers and Punctuation
export function KeyboardTypeNumbersAndPunctuation(p = {}) { return <Keyboard {...{"type":"numbers and punctuation"}} {...p} />; }
// figma: Type=Emoji
export function KeyboardTypeEmoji(p = {}) { return <Keyboard {...{"type":"emoji"}} {...p} />; }
// figma: Type=Web Form
export function KeyboardTypeWebForm(p = {}) { return <Keyboard {...{"type":"web form"}} {...p} />; }
// figma: Type=Web
export function KeyboardTypeWeb(p = {}) { return <Keyboard {...{"type":"web"}} {...p} />; }
// figma: Type=Find and Replace
export function KeyboardTypeFindAndReplace(p = {}) { return <Keyboard {...{"type":"find and replace"}} {...p} />; }
// figma: Type=Find
export function KeyboardTypeFind(p = {}) { return <Keyboard {...{"type":"find"}} {...p} />; }
// figma: Type=Default
export function KeyboardTypeDefault(p = {}) { return <Keyboard {...{"type":"default"}} {...p} />; }
const __all = [KeyboardTypeNumbersAndPunctuation, KeyboardTypeEmoji, KeyboardTypeWebForm, KeyboardTypeWeb, KeyboardTypeFindAndReplace, KeyboardTypeFind, KeyboardTypeDefault];
export function KeyboardVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default KeyboardVariants;
