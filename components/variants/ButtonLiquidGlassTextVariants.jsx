// Named exports for every Figma variant of ButtonLiquidGlassText
import { ButtonLiquidGlassText } from '../../components/views/ButtonLiquidGlassText.jsx';
// figma: Tinted=True
export function ButtonLiquidGlassTextTintedTrue(p = {}) { return <ButtonLiquidGlassText {...{"tinted":true}} {...p} />; }
// figma: Tinted=False
export function ButtonLiquidGlassTextTintedFalse(p = {}) { return <ButtonLiquidGlassText {...{"tinted":false}} {...p} />; }
const __all = [ButtonLiquidGlassTextTintedTrue, ButtonLiquidGlassTextTintedFalse];
export function ButtonLiquidGlassTextVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ButtonLiquidGlassTextVariants;
