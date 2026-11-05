// Named exports for every Figma variant of ButtonLiquidGlass
import { ButtonLiquidGlass } from '../../components/buttons/ButtonLiquidGlass.jsx';
// figma: Mode=Dark
export function ButtonLiquidGlassModeDark(p = {}) { return <ButtonLiquidGlass {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function ButtonLiquidGlassModeLight(p = {}) { return <ButtonLiquidGlass {...{"mode":"light"}} {...p} />; }
const __all = [ButtonLiquidGlassModeDark, ButtonLiquidGlassModeLight];
export function ButtonLiquidGlassVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ButtonLiquidGlassVariants;
