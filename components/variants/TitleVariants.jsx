// Named exports for every Figma variant of Title
import { Title } from '../../components/views/Title.jsx';
// figma: Mode=Dark
export function TitleModeDark(p = {}) { return <Title {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function TitleModeLight(p = {}) { return <Title {...{"mode":"light"}} {...p} />; }
const __all = [TitleModeDark, TitleModeLight];
export function TitleVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default TitleVariants;
