// Named exports for every Figma variant of ButtonVerticalStack
import { ButtonVerticalStack } from '../../components/tab-bars/ButtonVerticalStack.jsx';
// figma: Selected=False
export function ButtonVerticalStackSelectedFalse(p = {}) { return <ButtonVerticalStack {...{"selected":false}} {...p} />; }
// figma: Selected=True
export function ButtonVerticalStackSelectedTrue(p = {}) { return <ButtonVerticalStack {...{"selected":true}} {...p} />; }
const __all = [ButtonVerticalStackSelectedFalse, ButtonVerticalStackSelectedTrue];
export function ButtonVerticalStackVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ButtonVerticalStackVariants;
