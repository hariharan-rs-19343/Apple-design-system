// Named exports for every Figma variant of CardTop
import { CardTop } from '../../components/labels/CardTop.jsx';
// figma: Mode=Dark Elevated
export function CardTopModeDarkElevated(p = {}) { return <CardTop {...{"mode":"dark elevated"}} {...p} />; }
// figma: Mode=Dark
export function CardTopModeDark(p = {}) { return <CardTop {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function CardTopModeLight(p = {}) { return <CardTop {...{"mode":"light"}} {...p} />; }
const __all = [CardTopModeDarkElevated, CardTopModeDark, CardTopModeLight];
export function CardTopVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default CardTopVariants;
