// Named exports for every Figma variant of ExamplesPicker2
import { ExamplesPicker2 } from '../../components/kit/ExamplesPicker2.jsx';
// figma: Type=Inline
export function ExamplesPicker2TypeInline(p = {}) { return <ExamplesPicker2 {...{"type":"inline"}} {...p} />; }
// figma: Type=Compact
export function ExamplesPicker2TypeCompact(p = {}) { return <ExamplesPicker2 {...{"type":"compact"}} {...p} />; }
const __all = [ExamplesPicker2TypeInline, ExamplesPicker2TypeCompact];
export function ExamplesPicker2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ExamplesPicker2Variants;
