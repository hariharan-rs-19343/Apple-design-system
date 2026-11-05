// Named exports for every Figma variant of ExamplesPicker
import { ExamplesPicker } from '../../components/kit/ExamplesPicker.jsx';
// figma: Type=Wheels of Time (Date)
export function ExamplesPickerTypeWheelsOfTimeDate(p = {}) { return <ExamplesPicker {...{"type":"wheels of time (date)"}} {...p} />; }
// figma: Type=Wheels of Time (Time)
export function ExamplesPickerTypeWheelsOfTimeTime(p = {}) { return <ExamplesPicker {...{"type":"wheels of time (time)"}} {...p} />; }
// figma: Type=Inline
export function ExamplesPickerTypeInline(p = {}) { return <ExamplesPicker {...{"type":"inline"}} {...p} />; }
const __all = [ExamplesPickerTypeWheelsOfTimeDate, ExamplesPickerTypeWheelsOfTimeTime, ExamplesPickerTypeInline];
export function ExamplesPickerVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ExamplesPickerVariants;
