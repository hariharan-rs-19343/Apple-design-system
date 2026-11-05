// Named exports for every Figma variant of ContentsDisclosure
import { ContentsDisclosure } from '../../components/lists/ContentsDisclosure.jsx';
// figma: Disclosed=False
export function ContentsDisclosureDisclosedFalse(p = {}) { return <ContentsDisclosure {...{"disclosed":false}} {...p} />; }
// figma: Disclosed=True
export function ContentsDisclosureDisclosedTrue(p = {}) { return <ContentsDisclosure {...{"disclosed":true}} {...p} />; }
const __all = [ContentsDisclosureDisclosedFalse, ContentsDisclosureDisclosedTrue];
export function ContentsDisclosureVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ContentsDisclosureVariants;
