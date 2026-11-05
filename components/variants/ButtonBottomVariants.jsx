// Named exports for every Figma variant of ButtonBottom
import { ButtonBottom } from '../../components/buttons/ButtonBottom.jsx';
// figma: State=Text - Primary
export function ButtonBottomStateTextPrimary(p = {}) { return <ButtonBottom {...{"state":"text - primary"}} {...p} />; }
// figma: State=Text
export function ButtonBottomStateText(p = {}) { return <ButtonBottom {...{"state":"text"}} {...p} />; }
// figma: State=6 Symbols
export function ButtonBottomState6Symbols(p = {}) { return <ButtonBottom {...{"state":"6 symbols"}} {...p} />; }
// figma: State=5 Symbols
export function ButtonBottomState5Symbols(p = {}) { return <ButtonBottom {...{"state":"5 symbols"}} {...p} />; }
// figma: State=4 Symbols
export function ButtonBottomState4Symbols(p = {}) { return <ButtonBottom {...{"state":"4 symbols"}} {...p} />; }
// figma: State=3 Symbols
export function ButtonBottomState3Symbols(p = {}) { return <ButtonBottom {...{"state":"3 symbols"}} {...p} />; }
// figma: State=2 Symbols
export function ButtonBottomState2Symbols(p = {}) { return <ButtonBottom {...{"state":"2 symbols"}} {...p} />; }
// figma: State=1 Symbol
export function ButtonBottomState1Symbol(p = {}) { return <ButtonBottom {...{"state":"1 symbol"}} {...p} />; }
// figma: State=1 Symbol - Prominent
export function ButtonBottomState1SymbolProminent(p = {}) { return <ButtonBottom {...{"state":"1 symbol - prominent"}} {...p} />; }
const __all = [ButtonBottomStateTextPrimary, ButtonBottomStateText, ButtonBottomState6Symbols, ButtonBottomState5Symbols, ButtonBottomState4Symbols, ButtonBottomState3Symbols, ButtonBottomState2Symbols, ButtonBottomState1Symbol, ButtonBottomState1SymbolProminent];
export function ButtonBottomVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ButtonBottomVariants;
