// Named exports for every Figma variant of Disclsoure
import { Disclsoure } from '../../components/controls/Disclsoure.jsx';
// figma: Open=False
export function DisclsoureOpenFalse(p = {}) { return <Disclsoure {...{"open":false}} {...p} />; }
// figma: Open=True
export function DisclsoureOpenTrue(p = {}) { return <Disclsoure {...{"open":true}} {...p} />; }
const __all = [DisclsoureOpenFalse, DisclsoureOpenTrue];
export function DisclsoureVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default DisclsoureVariants;
