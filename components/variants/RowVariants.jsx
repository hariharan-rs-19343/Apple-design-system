// Named exports for every Figma variant of Row
import { Row } from '../../components/lists/Row.jsx';
// figma: Height=Tall
export function RowHeightTall(p = {}) { return <Row {...{"height":"tall"}} {...p} />; }
// figma: Height=Regular
export function RowHeightRegular(p = {}) { return <Row {...{"height":"regular"}} {...p} />; }
const __all = [RowHeightTall, RowHeightRegular];
export function RowVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default RowVariants;
