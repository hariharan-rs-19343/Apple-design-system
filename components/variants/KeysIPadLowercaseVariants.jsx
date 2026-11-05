// Named exports for every Figma variant of KeysIPadLowercase
import { KeysIPadLowercase } from '../../components/keyboards/KeysIPadLowercase.jsx';
// figma: Mode=Dark, Type=2 Storey Lower
export function KeysIPadLowercaseModeDarkType2StoreyLower(p = {}) { return <KeysIPadLowercase {...{"mode":"dark","type":"2 storey lower"}} {...p} />; }
// figma: Mode=Dark, Type=2 Storey Upper
export function KeysIPadLowercaseModeDarkType2StoreyUpper(p = {}) { return <KeysIPadLowercase {...{"mode":"dark","type":"2 storey upper"}} {...p} />; }
// figma: Mode=Dark, Type=2 Storey Punctuation
export function KeysIPadLowercaseModeDarkType2StoreyPunctuation(p = {}) { return <KeysIPadLowercase {...{"mode":"dark","type":"2 storey punctuation"}} {...p} />; }
// figma: Mode=Dark, Type=1 Story Punctuation
export function KeysIPadLowercaseModeDarkType1StoryPunctuation(p = {}) { return <KeysIPadLowercase {...{"mode":"dark","type":"1 story punctuation"}} {...p} />; }
// figma: Mode=Light, Type=2 Storey Lower
export function KeysIPadLowercaseModeLightType2StoreyLower(p = {}) { return <KeysIPadLowercase {...{"mode":"light","type":"2 storey lower"}} {...p} />; }
// figma: Mode=Light, Type=2 Storey Upper
export function KeysIPadLowercaseModeLightType2StoreyUpper(p = {}) { return <KeysIPadLowercase {...{"mode":"light","type":"2 storey upper"}} {...p} />; }
// figma: Mode=Light, Type=2 Storey Punctuation
export function KeysIPadLowercaseModeLightType2StoreyPunctuation(p = {}) { return <KeysIPadLowercase {...{"mode":"light","type":"2 storey punctuation"}} {...p} />; }
// figma: Mode=Light, Type=1 Story Punctuation
export function KeysIPadLowercaseModeLightType1StoryPunctuation(p = {}) { return <KeysIPadLowercase {...{"mode":"light","type":"1 story punctuation"}} {...p} />; }
const __all = [KeysIPadLowercaseModeDarkType2StoreyLower, KeysIPadLowercaseModeDarkType2StoreyUpper, KeysIPadLowercaseModeDarkType2StoreyPunctuation, KeysIPadLowercaseModeDarkType1StoryPunctuation, KeysIPadLowercaseModeLightType2StoreyLower, KeysIPadLowercaseModeLightType2StoreyUpper, KeysIPadLowercaseModeLightType2StoreyPunctuation, KeysIPadLowercaseModeLightType1StoryPunctuation];
export function KeysIPadLowercaseVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default KeysIPadLowercaseVariants;
