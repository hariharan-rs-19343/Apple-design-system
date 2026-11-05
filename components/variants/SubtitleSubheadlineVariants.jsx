// Named exports for every Figma variant of SubtitleSubheadline
import { SubtitleSubheadline } from '../../components/navigation/SubtitleSubheadline.jsx';
// figma: Mode=Dark
export function SubtitleSubheadlineModeDark(p = {}) { return <SubtitleSubheadline {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function SubtitleSubheadlineModeLight(p = {}) { return <SubtitleSubheadline {...{"mode":"light"}} {...p} />; }
const __all = [SubtitleSubheadlineModeDark, SubtitleSubheadlineModeLight];
export function SubtitleSubheadlineVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SubtitleSubheadlineVariants;
