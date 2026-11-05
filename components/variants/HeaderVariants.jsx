// Named exports for every Figma variant of Header
import { Header } from '../../components/labels/Header.jsx';
// figma: Mode=Dark
export function HeaderModeDark(p = {}) { return <Header {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function HeaderModeLight(p = {}) { return <Header {...{"mode":"light"}} {...p} />; }
const __all = [HeaderModeDark, HeaderModeLight];
export function HeaderVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default HeaderVariants;
