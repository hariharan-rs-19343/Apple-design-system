// Named exports for every Figma variant of KeysNumbericDark
import { KeysNumbericDark } from '../../components/keyboards-dark/KeysNumbericDark.jsx';
// figma: Type=Delete
export function KeysNumbericDarkTypeDelete(p = {}) { return <KeysNumbericDark {...{"type":"delete"}} {...p} />; }
// figma: Type=2 Lines
export function KeysNumbericDarkType2Lines(p = {}) { return <KeysNumbericDark {...{"type":"2 lines"}} {...p} />; }
// figma: Type=1 Line
export function KeysNumbericDarkType1Line(p = {}) { return <KeysNumbericDark {...{"type":"1 line"}} {...p} />; }
const __all = [KeysNumbericDarkTypeDelete, KeysNumbericDarkType2Lines, KeysNumbericDarkType1Line];
export function KeysNumbericDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default KeysNumbericDarkVariants;
