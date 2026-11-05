// Named exports for every Figma variant of HeaderDark
import { HeaderDark } from '../../components/kit/HeaderDark.jsx';
// figma: Open=True
export function HeaderDarkOpenTrue(p = {}) { return <HeaderDark {...{"open":true}} {...p} />; }
// figma: Open=False
export function HeaderDarkOpenFalse(p = {}) { return <HeaderDark {...{"open":false}} {...p} />; }
const __all = [HeaderDarkOpenTrue, HeaderDarkOpenFalse];
export function HeaderDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default HeaderDarkVariants;
