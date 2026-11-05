// Named exports for every Figma variant of ButtonText2
import { ButtonText2 } from '../../components/buttons/ButtonText2.jsx';
// figma: Mode=Dark, State=Disabled
export function ButtonText2ModeDarkStateDisabled(p = {}) { return <ButtonText2 {...{"mode":"dark","state":"disabled"}} {...p} />; }
// figma: Mode=Dark, State=Tinted
export function ButtonText2ModeDarkStateTinted(p = {}) { return <ButtonText2 {...{"mode":"dark","state":"tinted"}} {...p} />; }
// figma: Mode=Dark, State=Selected
export function ButtonText2ModeDarkStateSelected(p = {}) { return <ButtonText2 {...{"mode":"dark","state":"selected"}} {...p} />; }
// figma: Mode=Dark, State=Default
export function ButtonText2ModeDarkStateDefault(p = {}) { return <ButtonText2 {...{"mode":"dark","state":"default"}} {...p} />; }
// figma: Mode=Light,State=Tinted
export function ButtonText2ModeLightStateTinted(p = {}) { return <ButtonText2 {...{"mode":"light","state":"tinted"}} {...p} />; }
// figma: Mode=Light,State=Disabled
export function ButtonText2ModeLightStateDisabled(p = {}) { return <ButtonText2 {...{"mode":"light","state":"disabled"}} {...p} />; }
// figma: Mode=Light, State=Selected
export function ButtonText2ModeLightStateSelected(p = {}) { return <ButtonText2 {...{"mode":"light","state":"selected"}} {...p} />; }
// figma: Mode=Light,State=Default
export function ButtonText2ModeLightStateDefault(p = {}) { return <ButtonText2 {...{"mode":"light","state":"default"}} {...p} />; }
const __all = [ButtonText2ModeDarkStateDisabled, ButtonText2ModeDarkStateTinted, ButtonText2ModeDarkStateSelected, ButtonText2ModeDarkStateDefault, ButtonText2ModeLightStateTinted, ButtonText2ModeLightStateDisabled, ButtonText2ModeLightStateSelected, ButtonText2ModeLightStateDefault];
export function ButtonText2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ButtonText2Variants;
