// Named exports for every Figma variant of ExamplesTabBars
import { ExamplesTabBars } from '../../components/kit/ExamplesTabBars.jsx';
// figma: Type=With Search
export function ExamplesTabBarsTypeWithSearch(p = {}) { return <ExamplesTabBars {...{"type":"with search"}} {...p} />; }
// figma: Type=Without Search
export function ExamplesTabBarsTypeWithoutSearch(p = {}) { return <ExamplesTabBars {...{"type":"without search"}} {...p} />; }
const __all = [ExamplesTabBarsTypeWithSearch, ExamplesTabBarsTypeWithoutSearch];
export function ExamplesTabBarsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ExamplesTabBarsVariants;
