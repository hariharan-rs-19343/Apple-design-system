// Named exports for every Figma variant of TrailingDisclosure
import { TrailingDisclosure } from '../../components/sidebar-items/TrailingDisclosure.jsx';
// figma: Open=True
export function TrailingDisclosureOpenTrue(p = {}) { return <TrailingDisclosure {...{"open":true}} {...p} />; }
// figma: Open=False
export function TrailingDisclosureOpenFalse(p = {}) { return <TrailingDisclosure {...{"open":false}} {...p} />; }
const __all = [TrailingDisclosureOpenTrue, TrailingDisclosureOpenFalse];
export function TrailingDisclosureVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default TrailingDisclosureVariants;
