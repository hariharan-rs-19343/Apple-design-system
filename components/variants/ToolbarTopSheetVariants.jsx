// Named exports for every Figma variant of ToolbarTopSheet
import { ToolbarTopSheet } from '../../components/navigation/ToolbarTopSheet.jsx';
// figma: Mode=Light, Style=Compact Large
export function ToolbarTopSheetModeLightStyleCompactLarge(p = {}) { return <ToolbarTopSheet {...{"mode":"light","style2":"compact large"}} {...p} />; }
// figma: Mode=Light, Style=Default
export function ToolbarTopSheetModeLightStyleDefault(p = {}) { return <ToolbarTopSheet {...{"mode":"light","style2":"default"}} {...p} />; }
// figma: Mode=Light, Style=Large Title
export function ToolbarTopSheetModeLightStyleLargeTitle(p = {}) { return <ToolbarTopSheet {...{"mode":"light","style2":"large title"}} {...p} />; }
// figma: Mode=Light, Style=Title 2 Line Left
export function ToolbarTopSheetModeLightStyleTitle2LineLeft(p = {}) { return <ToolbarTopSheet {...{"mode":"light","style2":"title 2 line left"}} {...p} />; }
// figma: Mode=Light, Style=Title 2 Line
export function ToolbarTopSheetModeLightStyleTitle2Line(p = {}) { return <ToolbarTopSheet {...{"mode":"light","style2":"title 2 line"}} {...p} />; }
const __all = [ToolbarTopSheetModeLightStyleCompactLarge, ToolbarTopSheetModeLightStyleDefault, ToolbarTopSheetModeLightStyleLargeTitle, ToolbarTopSheetModeLightStyleTitle2LineLeft, ToolbarTopSheetModeLightStyleTitle2Line];
export function ToolbarTopSheetVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ToolbarTopSheetVariants;
