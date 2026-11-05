// Named exports for every Figma variant of HSQAWidgetLight
import { HSQAWidgetLight } from '../../components/home-screen/HSQAWidgetLight.jsx';
// figma: State=Selected
export function HSQAWidgetLightStateSelected(p = {}) { return <HSQAWidgetLight {...{"state":"selected"}} {...p} />; }
// figma: State=Default
export function HSQAWidgetLightStateDefault(p = {}) { return <HSQAWidgetLight {...{"state":"default"}} {...p} />; }
const __all = [HSQAWidgetLightStateSelected, HSQAWidgetLightStateDefault];
export function HSQAWidgetLightVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default HSQAWidgetLightVariants;
