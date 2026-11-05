// Named exports for every Figma variant of ExamplesAlert2
import { ExamplesAlert2 } from '../../components/kit/ExamplesAlert2.jsx';
// figma: Keyboard=True
export function ExamplesAlert2KeyboardTrue(p = {}) { return <ExamplesAlert2 {...{"keyboard":true}} {...p} />; }
// figma: Keyboard=False
export function ExamplesAlert2KeyboardFalse(p = {}) { return <ExamplesAlert2 {...{"keyboard":false}} {...p} />; }
const __all = [ExamplesAlert2KeyboardTrue, ExamplesAlert2KeyboardFalse];
export function ExamplesAlert2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ExamplesAlert2Variants;
