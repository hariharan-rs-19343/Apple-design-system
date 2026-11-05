// Named exports for every Figma variant of ToolbarTopRegularSizeClass
import { ToolbarTopRegularSizeClass } from '../../components/kit/ToolbarTopRegularSizeClass.jsx';
// figma: Style=Document Browser
export function ToolbarTopRegularSizeClassStyleDocumentBrowser(p = {}) { return <ToolbarTopRegularSizeClass {...{"style2":"document browser"}} {...p} />; }
// figma: Style=Default
export function ToolbarTopRegularSizeClassStyleDefault(p = {}) { return <ToolbarTopRegularSizeClass {...{"style2":"default"}} {...p} />; }
// figma: Style=Large Title
export function ToolbarTopRegularSizeClassStyleLargeTitle(p = {}) { return <ToolbarTopRegularSizeClass {...{"style2":"large title"}} {...p} />; }
// figma: Style=Document
export function ToolbarTopRegularSizeClassStyleDocument(p = {}) { return <ToolbarTopRegularSizeClass {...{"style2":"document"}} {...p} />; }
const __all = [ToolbarTopRegularSizeClassStyleDocumentBrowser, ToolbarTopRegularSizeClassStyleDefault, ToolbarTopRegularSizeClassStyleLargeTitle, ToolbarTopRegularSizeClassStyleDocument];
export function ToolbarTopRegularSizeClassVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ToolbarTopRegularSizeClassVariants;
