// Named exports for every Figma variant of ToolbarTopIPhone
import { ToolbarTopIPhone } from '../../components/toolbars/ToolbarTopIPhone.jsx';
// figma: Style=Compact Large
export function ToolbarTopIPhoneStyleCompactLarge(p = {}) { return <ToolbarTopIPhone {...{"style2":"compact large"}} {...p} />; }
// figma: Style=Large Title
export function ToolbarTopIPhoneStyleLargeTitle(p = {}) { return <ToolbarTopIPhone {...{"style2":"large title"}} {...p} />; }
// figma: Style=Title 2 Line Left
export function ToolbarTopIPhoneStyleTitle2LineLeft(p = {}) { return <ToolbarTopIPhone {...{"style2":"title 2 line left"}} {...p} />; }
// figma: Style=Title 2 Line
export function ToolbarTopIPhoneStyleTitle2Line(p = {}) { return <ToolbarTopIPhone {...{"style2":"title 2 line"}} {...p} />; }
// figma: Style=Default
export function ToolbarTopIPhoneStyleDefault(p = {}) { return <ToolbarTopIPhone {...{"style2":"default"}} {...p} />; }
const __all = [ToolbarTopIPhoneStyleCompactLarge, ToolbarTopIPhoneStyleLargeTitle, ToolbarTopIPhoneStyleTitle2LineLeft, ToolbarTopIPhoneStyleTitle2Line, ToolbarTopIPhoneStyleDefault];
export function ToolbarTopIPhoneVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ToolbarTopIPhoneVariants;
