// Named exports for every Figma variant of BottomButtons
import { BottomButtons } from '../../components/actions/BottomButtons.jsx';
// figma: Mode=Dark, Type=ABC and Mic
export function BottomButtonsModeDarkTypeABCAndMic(p = {}) { return <BottomButtons {...{"mode":"dark","type":"abc and mic"}} {...p} />; }
// figma: Mode=Light, Type=ABC and Mic
export function BottomButtonsModeLightTypeABCAndMic(p = {}) { return <BottomButtons {...{"mode":"light","type":"abc and mic"}} {...p} />; }
// figma: Type=Emoji and Mic, Mode=Dark
export function BottomButtonsTypeEmojiAndMicModeDark(p = {}) { return <BottomButtons {...{"mode":"dark","type":"emoji and mic"}} {...p} />; }
// figma: Type=Emoji and Mic, Mode=Light
export function BottomButtonsTypeEmojiAndMicModeLight(p = {}) { return <BottomButtons {...{"mode":"light","type":"emoji and mic"}} {...p} />; }
const __all = [BottomButtonsModeDarkTypeABCAndMic, BottomButtonsModeLightTypeABCAndMic, BottomButtonsTypeEmojiAndMicModeDark, BottomButtonsTypeEmojiAndMicModeLight];
export function BottomButtonsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default BottomButtonsVariants;
