// Named exports for every Figma variant of ViewContents
import { ViewContents } from '../../components/views/ViewContents.jsx';
// figma: Mode=Dark
export function ViewContentsModeDark(p = {}) { return <ViewContents {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function ViewContentsModeLight(p = {}) { return <ViewContents {...{"mode":"light"}} {...p} />; }
const __all = [ViewContentsModeDark, ViewContentsModeLight];
export function ViewContentsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ViewContentsVariants;
