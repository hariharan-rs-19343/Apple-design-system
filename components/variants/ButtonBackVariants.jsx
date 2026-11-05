// Named exports for every Figma variant of ButtonBack
import { ButtonBack } from '../../components/buttons/ButtonBack.jsx';
// figma: Enabled=False
export function ButtonBackEnabledFalse(p = {}) { return <ButtonBack {...{"enabled":false}} {...p} />; }
// figma: Enabled=True
export function ButtonBackEnabledTrue(p = {}) { return <ButtonBack {...{"enabled":true}} {...p} />; }
const __all = [ButtonBackEnabledFalse, ButtonBackEnabledTrue];
export function ButtonBackVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ButtonBackVariants;
