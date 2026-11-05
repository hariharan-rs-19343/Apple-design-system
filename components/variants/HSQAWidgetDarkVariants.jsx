// Named exports for every Figma variant of HSQAWidgetDark
import { HSQAWidgetDark } from '../../components/home-screen/HSQAWidgetDark.jsx';
// figma: State=Selected
export function HSQAWidgetDarkStateSelected(p = {}) { return <HSQAWidgetDark {...{"state":"selected"}} {...p} />; }
// figma: State=Default
export function HSQAWidgetDarkStateDefault(p = {}) { return <HSQAWidgetDark {...{"state":"default"}} {...p} />; }
const __all = [HSQAWidgetDarkStateSelected, HSQAWidgetDarkStateDefault];
export function HSQAWidgetDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default HSQAWidgetDarkVariants;
