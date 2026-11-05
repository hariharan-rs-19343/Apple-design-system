// Named exports for every Figma variant of PageControl2
import { PageControl2 } from '../../components/page-controls/PageControl2.jsx';
// figma: Selected=False
export function PageControl2SelectedFalse(p = {}) { return <PageControl2 {...{"selected":false}} {...p} />; }
// figma: Selected=True
export function PageControl2SelectedTrue(p = {}) { return <PageControl2 {...{"selected":true}} {...p} />; }
const __all = [PageControl2SelectedFalse, PageControl2SelectedTrue];
export function PageControl2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default PageControl2Variants;
