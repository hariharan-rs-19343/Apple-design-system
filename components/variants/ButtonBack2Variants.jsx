// Named exports for every Figma variant of ButtonBack2
import { ButtonBack2 } from '../../components/actions/ButtonBack2.jsx';
// figma: Mode=Dark,State=Disabled
export function ButtonBack2ModeDarkStateDisabled(p = {}) { return <ButtonBack2 {...{"mode":"dark","state":"disabled"}} {...p} />; }
// figma: Mode=Dark,State=Default
export function ButtonBack2ModeDarkStateDefault(p = {}) { return <ButtonBack2 {...{"mode":"dark","state":"default"}} {...p} />; }
// figma: Mode=Light,State=Disabled
export function ButtonBack2ModeLightStateDisabled(p = {}) { return <ButtonBack2 {...{"mode":"light","state":"disabled"}} {...p} />; }
// figma: Mode=Light,State=Default
export function ButtonBack2ModeLightStateDefault(p = {}) { return <ButtonBack2 {...{"mode":"light","state":"default"}} {...p} />; }
const __all = [ButtonBack2ModeDarkStateDisabled, ButtonBack2ModeDarkStateDefault, ButtonBack2ModeLightStateDisabled, ButtonBack2ModeLightStateDefault];
export function ButtonBack2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ButtonBack2Variants;
