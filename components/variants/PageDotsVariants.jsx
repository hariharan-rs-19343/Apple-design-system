// Named exports for every Figma variant of PageDots
import { PageDots } from '../../components/tab-bars/PageDots.jsx';
// figma: Mode=Dark,Selected=False
export function PageDotsModeDarkSelectedFalse(p = {}) { return <PageDots {...{"mode":"dark","selected":false}} {...p} />; }
// figma: Mode=Dark,Selected=True
export function PageDotsModeDarkSelectedTrue(p = {}) { return <PageDots {...{"mode":"dark","selected":true}} {...p} />; }
// figma: Mode=Light,Selected=False
export function PageDotsModeLightSelectedFalse(p = {}) { return <PageDots {...{"mode":"light","selected":false}} {...p} />; }
// figma: Mode=Light,Selected=True
export function PageDotsModeLightSelectedTrue(p = {}) { return <PageDots {...{"mode":"light","selected":true}} {...p} />; }
const __all = [PageDotsModeDarkSelectedFalse, PageDotsModeDarkSelectedTrue, PageDotsModeLightSelectedFalse, PageDotsModeLightSelectedTrue];
export function PageDotsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default PageDotsVariants;
