// Named exports for every Figma variant of ButtonLiquidGlassSymbol
import { ButtonLiquidGlassSymbol } from '../../components/buttons/ButtonLiquidGlassSymbol.jsx';
// figma: Tinted=True
export function ButtonLiquidGlassSymbolTintedTrue(p = {}) { return <ButtonLiquidGlassSymbol {...{"tinted":true}} {...p} />; }
// figma: Tinted=False
export function ButtonLiquidGlassSymbolTintedFalse(p = {}) { return <ButtonLiquidGlassSymbol {...{"tinted":false}} {...p} />; }
const __all = [ButtonLiquidGlassSymbolTintedTrue, ButtonLiquidGlassSymbolTintedFalse];
export function ButtonLiquidGlassSymbolVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ButtonLiquidGlassSymbolVariants;
