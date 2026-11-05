// Named exports for every Figma variant of ButtonLiquidGlassTinted
import { ButtonLiquidGlassTinted } from '../../components/buttons/ButtonLiquidGlassTinted.jsx';
// figma: Mode=Dark
export function ButtonLiquidGlassTintedModeDark(p = {}) { return <ButtonLiquidGlassTinted {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Dark Elevated
export function ButtonLiquidGlassTintedModeDarkElevated(p = {}) { return <ButtonLiquidGlassTinted {...{"mode":"dark elevated"}} {...p} />; }
// figma: Mode=Light
export function ButtonLiquidGlassTintedModeLight(p = {}) { return <ButtonLiquidGlassTinted {...{"mode":"light"}} {...p} />; }
const __all = [ButtonLiquidGlassTintedModeDark, ButtonLiquidGlassTintedModeDarkElevated, ButtonLiquidGlassTintedModeLight];
export function ButtonLiquidGlassTintedVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ButtonLiquidGlassTintedVariants;
