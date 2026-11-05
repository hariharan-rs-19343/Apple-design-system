// Named exports for every Figma variant of ExamplesAlert
import { ExamplesAlert } from '../../components/kit/ExamplesAlert.jsx';
// figma: Type=Stacked
export function ExamplesAlertTypeStacked(p = {}) { return <ExamplesAlert {...{"type":"stacked"}} {...p} />; }
// figma: Type=Side-by-side
export function ExamplesAlertTypeSideBySide(p = {}) { return <ExamplesAlert {...{"type":"side-by-side"}} {...p} />; }
const __all = [ExamplesAlertTypeStacked, ExamplesAlertTypeSideBySide];
export function ExamplesAlertVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ExamplesAlertVariants;
