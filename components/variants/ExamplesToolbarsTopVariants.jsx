// Named exports for every Figma variant of ExamplesToolbarsTop
import { ExamplesToolbarsTop } from '../../components/kit/ExamplesToolbarsTop.jsx';
// figma: Type=Title 2 Line Left
export function ExamplesToolbarsTopTypeTitle2LineLeft(p = {}) { return <ExamplesToolbarsTop {...{"type":"title 2 line left"}} {...p} />; }
// figma: Type=Title 2 Line
export function ExamplesToolbarsTopTypeTitle2Line(p = {}) { return <ExamplesToolbarsTop {...{"type":"title 2 line"}} {...p} />; }
// figma: Type=Large Title
export function ExamplesToolbarsTopTypeLargeTitle(p = {}) { return <ExamplesToolbarsTop {...{"type":"large title"}} {...p} />; }
// figma: Type=Compact Large Title
export function ExamplesToolbarsTopTypeCompactLargeTitle(p = {}) { return <ExamplesToolbarsTop {...{"type":"compact large title"}} {...p} />; }
// figma: Type=Default
export function ExamplesToolbarsTopTypeDefault(p = {}) { return <ExamplesToolbarsTop {...{"type":"default"}} {...p} />; }
const __all = [ExamplesToolbarsTopTypeTitle2LineLeft, ExamplesToolbarsTopTypeTitle2Line, ExamplesToolbarsTopTypeLargeTitle, ExamplesToolbarsTopTypeCompactLargeTitle, ExamplesToolbarsTopTypeDefault];
export function ExamplesToolbarsTopVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ExamplesToolbarsTopVariants;
