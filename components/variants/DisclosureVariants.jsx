// Named exports for every Figma variant of Disclosure
import { Disclosure } from '../../components/controls/Disclosure.jsx';
// figma: Table Open=False
export function DisclosureTableOpenFalse(p = {}) { return <Disclosure {...{"tableOpen":false}} {...p} />; }
// figma: Table Open=True
export function DisclosureTableOpenTrue(p = {}) { return <Disclosure {...{"tableOpen":true}} {...p} />; }
const __all = [DisclosureTableOpenFalse, DisclosureTableOpenTrue];
export function DisclosureVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default DisclosureVariants;
