// Named exports for every Figma variant of SubtitleCaption
import { SubtitleCaption } from '../../components/navigation/SubtitleCaption.jsx';
// figma: Mode=Dark
export function SubtitleCaptionModeDark(p = {}) { return <SubtitleCaption {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function SubtitleCaptionModeLight(p = {}) { return <SubtitleCaption {...{"mode":"light"}} {...p} />; }
const __all = [SubtitleCaptionModeDark, SubtitleCaptionModeLight];
export function SubtitleCaptionVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SubtitleCaptionVariants;
