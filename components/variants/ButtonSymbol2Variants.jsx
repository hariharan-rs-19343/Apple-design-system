// Named exports for every Figma variant of ButtonSymbol2
import { ButtonSymbol2 } from '../../components/buttons/ButtonSymbol2.jsx';
// figma: Mode=Dark, State=Disabled
export function ButtonSymbol2ModeDarkStateDisabled(p = {}) { return <ButtonSymbol2 {...{"mode":"dark","state":"disabled"}} {...p} />; }
// figma: Mode=Dark, State=Selected
export function ButtonSymbol2ModeDarkStateSelected(p = {}) { return <ButtonSymbol2 {...{"mode":"dark","state":"selected"}} {...p} />; }
// figma: Mode=Dark, State=Tinted
export function ButtonSymbol2ModeDarkStateTinted(p = {}) { return <ButtonSymbol2 {...{"mode":"dark","state":"tinted"}} {...p} />; }
// figma: Mode=Dark, State=Default
export function ButtonSymbol2ModeDarkStateDefault(p = {}) { return <ButtonSymbol2 {...{"mode":"dark","state":"default"}} {...p} />; }
// figma: Mode=Light,State=Disabled
export function ButtonSymbol2ModeLightStateDisabled(p = {}) { return <ButtonSymbol2 {...{"mode":"light","state":"disabled"}} {...p} />; }
// figma: Mode=Light, State=Selected
export function ButtonSymbol2ModeLightStateSelected(p = {}) { return <ButtonSymbol2 {...{"mode":"light","state":"selected"}} {...p} />; }
// figma: Mode=Light,State=Tinted
export function ButtonSymbol2ModeLightStateTinted(p = {}) { return <ButtonSymbol2 {...{"mode":"light","state":"tinted"}} {...p} />; }
// figma: Mode=Light,State=Default
export function ButtonSymbol2ModeLightStateDefault(p = {}) { return <ButtonSymbol2 {...{"mode":"light","state":"default"}} {...p} />; }
const __all = [ButtonSymbol2ModeDarkStateDisabled, ButtonSymbol2ModeDarkStateSelected, ButtonSymbol2ModeDarkStateTinted, ButtonSymbol2ModeDarkStateDefault, ButtonSymbol2ModeLightStateDisabled, ButtonSymbol2ModeLightStateSelected, ButtonSymbol2ModeLightStateTinted, ButtonSymbol2ModeLightStateDefault];
export function ButtonSymbol2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ButtonSymbol2Variants;
