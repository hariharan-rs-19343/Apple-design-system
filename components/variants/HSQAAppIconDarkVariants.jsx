// Named exports for every Figma variant of HSQAAppIconDark
import { HSQAAppIconDark } from '../../components/home-screen/HSQAAppIconDark.jsx';
// figma: State=Selected
export function HSQAAppIconDarkStateSelected(p = {}) { return <HSQAAppIconDark {...{"state":"selected"}} {...p} />; }
// figma: State=Default
export function HSQAAppIconDarkStateDefault(p = {}) { return <HSQAAppIconDark {...{"state":"default"}} {...p} />; }
const __all = [HSQAAppIconDarkStateSelected, HSQAAppIconDarkStateDefault];
export function HSQAAppIconDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default HSQAAppIconDarkVariants;
