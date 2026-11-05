// Named exports for every Figma variant of TitleLargeTitle
import { TitleLargeTitle } from '../../components/navigation/TitleLargeTitle.jsx';
// figma: Mode=Dark
export function TitleLargeTitleModeDark(p = {}) { return <TitleLargeTitle {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function TitleLargeTitleModeLight(p = {}) { return <TitleLargeTitle {...{"mode":"light"}} {...p} />; }
const __all = [TitleLargeTitleModeDark, TitleLargeTitleModeLight];
export function TitleLargeTitleVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default TitleLargeTitleVariants;
