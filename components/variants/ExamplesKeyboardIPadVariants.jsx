// Named exports for every Figma variant of ExamplesKeyboardIPad
import { ExamplesKeyboardIPad } from '../../components/kit/ExamplesKeyboardIPad.jsx';
// figma: Type=Find and Replace
export function ExamplesKeyboardIPadTypeFindAndReplace(p = {}) { return <ExamplesKeyboardIPad {...{"type":"find and replace"}} {...p} />; }
// figma: Type=Emoji
export function ExamplesKeyboardIPadTypeEmoji(p = {}) { return <ExamplesKeyboardIPad {...{"type":"emoji"}} {...p} />; }
// figma: Type=Email
export function ExamplesKeyboardIPadTypeEmail(p = {}) { return <ExamplesKeyboardIPad {...{"type":"email"}} {...p} />; }
// figma: Type=Text (Shift)
export function ExamplesKeyboardIPadTypeTextShift(p = {}) { return <ExamplesKeyboardIPad {...{"type":"text (shift)"}} {...p} />; }
// figma: Type=Text
export function ExamplesKeyboardIPadTypeText(p = {}) { return <ExamplesKeyboardIPad {...{"type":"text"}} {...p} />; }
// figma: Type=Text (Enter Emphasized)
export function ExamplesKeyboardIPadTypeTextEnterEmphasized(p = {}) { return <ExamplesKeyboardIPad {...{"type":"text (enter emphasized)"}} {...p} />; }
const __all = [ExamplesKeyboardIPadTypeFindAndReplace, ExamplesKeyboardIPadTypeEmoji, ExamplesKeyboardIPadTypeEmail, ExamplesKeyboardIPadTypeTextShift, ExamplesKeyboardIPadTypeText, ExamplesKeyboardIPadTypeTextEnterEmphasized];
export function ExamplesKeyboardIPadVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ExamplesKeyboardIPadVariants;
