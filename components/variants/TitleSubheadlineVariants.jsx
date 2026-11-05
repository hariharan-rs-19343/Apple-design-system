// Named exports for every Figma variant of TitleSubheadline
import { TitleSubheadline } from '../../components/navigation/TitleSubheadline.jsx';
// figma: Mode=Dark
export function TitleSubheadlineModeDark(p = {}) { return <TitleSubheadline {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function TitleSubheadlineModeLight(p = {}) { return <TitleSubheadline {...{"mode":"light"}} {...p} />; }
const __all = [TitleSubheadlineModeDark, TitleSubheadlineModeLight];
export function TitleSubheadlineVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default TitleSubheadlineVariants;
