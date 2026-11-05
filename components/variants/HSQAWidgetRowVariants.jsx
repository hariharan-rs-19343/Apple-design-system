// Named exports for every Figma variant of HSQAWidgetRow
import { HSQAWidgetRow } from '../../components/home-screen/HSQAWidgetRow.jsx';
// figma: Mode=Dark
export function HSQAWidgetRowModeDark(p = {}) { return <HSQAWidgetRow {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function HSQAWidgetRowModeLight(p = {}) { return <HSQAWidgetRow {...{"mode":"light"}} {...p} />; }
const __all = [HSQAWidgetRowModeDark, HSQAWidgetRowModeLight];
export function HSQAWidgetRowVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default HSQAWidgetRowVariants;
