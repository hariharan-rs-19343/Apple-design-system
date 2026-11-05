// Named exports for every Figma variant of ButtonSymbol3
import { ButtonSymbol3 } from '../../components/accessory-bars/ButtonSymbol3.jsx';
// figma: State=Disabled
export function ButtonSymbol3StateDisabled(p = {}) { return <ButtonSymbol3 {...{"property2":"","state":"disabled"}} {...p} />; }
// figma: State=Default
export function ButtonSymbol3StateDefault(p = {}) { return <ButtonSymbol3 {...{"property2":"","state":"default"}} {...p} />; }
// figma: State=_Button - Symbol - Dark, Property 2=Disabled
export function ButtonSymbol3StateButtonSymbolDarkProperty2Disabled(p = {}) { return <ButtonSymbol3 {...{"property2":"disabled","state":"_button - symbol - dark"}} {...p} />; }
// figma: State=_Button - Symbol - Dark, Property 2=Default
export function ButtonSymbol3StateButtonSymbolDarkProperty2Default(p = {}) { return <ButtonSymbol3 {...{"property2":"default","state":"_button - symbol - dark"}} {...p} />; }
const __all = [ButtonSymbol3StateDisabled, ButtonSymbol3StateDefault, ButtonSymbol3StateButtonSymbolDarkProperty2Disabled, ButtonSymbol3StateButtonSymbolDarkProperty2Default];
export function ButtonSymbol3Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ButtonSymbol3Variants;
