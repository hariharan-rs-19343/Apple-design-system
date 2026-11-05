// Named exports for every Figma variant of HSQAAppIconLight
import { HSQAAppIconLight } from '../../components/home-screen/HSQAAppIconLight.jsx';
// figma: State=Selected
export function HSQAAppIconLightStateSelected(p = {}) { return <HSQAAppIconLight {...{"state":"selected"}} {...p} />; }
// figma: State=Default
export function HSQAAppIconLightStateDefault(p = {}) { return <HSQAAppIconLight {...{"state":"default"}} {...p} />; }
const __all = [HSQAAppIconLightStateSelected, HSQAAppIconLightStateDefault];
export function HSQAAppIconLightVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default HSQAAppIconLightVariants;
