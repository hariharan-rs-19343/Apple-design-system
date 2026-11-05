// Named exports for every Figma variant of ExamplesToolbarsBottom
import { ExamplesToolbarsBottom } from '../../components/kit/ExamplesToolbarsBottom.jsx';
// figma: Type=Search
export function ExamplesToolbarsBottomTypeSearch(p = {}) { return <ExamplesToolbarsBottom {...{"type":"search"}} {...p} />; }
// figma: Type=Symbols
export function ExamplesToolbarsBottomTypeSymbols(p = {}) { return <ExamplesToolbarsBottom {...{"type":"symbols"}} {...p} />; }
// figma: Type=Text
export function ExamplesToolbarsBottomTypeText(p = {}) { return <ExamplesToolbarsBottom {...{"type":"text"}} {...p} />; }
const __all = [ExamplesToolbarsBottomTypeSearch, ExamplesToolbarsBottomTypeSymbols, ExamplesToolbarsBottomTypeText];
export function ExamplesToolbarsBottomVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ExamplesToolbarsBottomVariants;
