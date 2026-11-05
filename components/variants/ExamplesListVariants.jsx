// Named exports for every Figma variant of ExamplesList
import { ExamplesList } from '../../components/kit/ExamplesList.jsx';
// figma: Type=Full Width + Section Headers
export function ExamplesListTypeFullWidthSectionHeaders(p = {}) { return <ExamplesList {...{"type":"full width + section headers"}} {...p} />; }
// figma: Type=Full Width
export function ExamplesListTypeFullWidth(p = {}) { return <ExamplesList {...{"type":"full width"}} {...p} />; }
// figma: Type=Inset
export function ExamplesListTypeInset(p = {}) { return <ExamplesList {...{"type":"inset"}} {...p} />; }
const __all = [ExamplesListTypeFullWidthSectionHeaders, ExamplesListTypeFullWidth, ExamplesListTypeInset];
export function ExamplesListVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ExamplesListVariants;
