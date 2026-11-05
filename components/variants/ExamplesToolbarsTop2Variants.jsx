// Named exports for every Figma variant of ExamplesToolbarsTop2
import { ExamplesToolbarsTop2 } from '../../components/kit/ExamplesToolbarsTop2.jsx';
// figma: Type=2 Line - Large Title
export function ExamplesToolbarsTop2Type2LineLargeTitle(p = {}) { return <ExamplesToolbarsTop2 {...{"type":"2 line - large title"}} {...p} />; }
// figma: Type=2 Line - Large Title Inline
export function ExamplesToolbarsTop2Type2LineLargeTitleInline(p = {}) { return <ExamplesToolbarsTop2 {...{"type":"2 line - large title inline"}} {...p} />; }
// figma: Type=2 Line - Center Aligned
export function ExamplesToolbarsTop2Type2LineCenterAligned(p = {}) { return <ExamplesToolbarsTop2 {...{"type":"2 line - center aligned"}} {...p} />; }
// figma: Type=2 Line - Left Aligned
export function ExamplesToolbarsTop2Type2LineLeftAligned(p = {}) { return <ExamplesToolbarsTop2 {...{"type":"2 line - left aligned"}} {...p} />; }
const __all = [ExamplesToolbarsTop2Type2LineLargeTitle, ExamplesToolbarsTop2Type2LineLargeTitleInline, ExamplesToolbarsTop2Type2LineCenterAligned, ExamplesToolbarsTop2Type2LineLeftAligned];
export function ExamplesToolbarsTop2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ExamplesToolbarsTop2Variants;
