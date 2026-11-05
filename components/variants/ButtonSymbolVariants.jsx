// Named exports for every Figma variant of ButtonSymbol
import { ButtonSymbol } from '../../components/buttons/ButtonSymbol.jsx';
// figma: Enabled=False
export function ButtonSymbolEnabledFalse(p = {}) { return <ButtonSymbol {...{"enabled":false}} {...p} />; }
// figma: Enabled=True
export function ButtonSymbolEnabledTrue(p = {}) { return <ButtonSymbol {...{"enabled":true}} {...p} />; }
const __all = [ButtonSymbolEnabledFalse, ButtonSymbolEnabledTrue];
export function ButtonSymbolVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ButtonSymbolVariants;
