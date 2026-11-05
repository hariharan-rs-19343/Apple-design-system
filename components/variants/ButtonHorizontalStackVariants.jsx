// Named exports for every Figma variant of ButtonHorizontalStack
import { ButtonHorizontalStack } from '../../components/tab-bars/ButtonHorizontalStack.jsx';
// figma: Selected=False
export function ButtonHorizontalStackSelectedFalse(p = {}) { return <ButtonHorizontalStack {...{"selected":false}} {...p} />; }
// figma: Selected=True
export function ButtonHorizontalStackSelectedTrue(p = {}) { return <ButtonHorizontalStack {...{"selected":true}} {...p} />; }
const __all = [ButtonHorizontalStackSelectedFalse, ButtonHorizontalStackSelectedTrue];
export function ButtonHorizontalStackVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ButtonHorizontalStackVariants;
