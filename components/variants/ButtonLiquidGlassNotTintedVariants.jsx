// Named exports for every Figma variant of ButtonLiquidGlassNotTinted
import { ButtonLiquidGlassNotTinted } from '../../components/buttons/ButtonLiquidGlassNotTinted.jsx';
// figma: Mode=Dark
export function ButtonLiquidGlassNotTintedModeDark(p = {}) { return <ButtonLiquidGlassNotTinted {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Dark Elevated
export function ButtonLiquidGlassNotTintedModeDarkElevated(p = {}) { return <ButtonLiquidGlassNotTinted {...{"mode":"dark elevated"}} {...p} />; }
// figma: Mode=Light
export function ButtonLiquidGlassNotTintedModeLight(p = {}) { return <ButtonLiquidGlassNotTinted {...{"mode":"light"}} {...p} />; }
const __all = [ButtonLiquidGlassNotTintedModeDark, ButtonLiquidGlassNotTintedModeDarkElevated, ButtonLiquidGlassNotTintedModeLight];
export function ButtonLiquidGlassNotTintedVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ButtonLiquidGlassNotTintedVariants;
