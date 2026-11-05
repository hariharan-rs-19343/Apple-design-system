// Named exports for every Figma variant of ButtonsTop
import { ButtonsTop } from '../../components/actions/ButtonsTop.jsx';
// figma: Type=Back
export function ButtonsTopTypeBack(p = {}) { return <ButtonsTop {...{"type":"back"}} {...p} />; }
// figma: Type=Text - Primary
export function ButtonsTopTypeTextPrimary(p = {}) { return <ButtonsTop {...{"type":"text - primary"}} {...p} />; }
// figma: Type=Text
export function ButtonsTopTypeText(p = {}) { return <ButtonsTop {...{"type":"text"}} {...p} />; }
// figma: Type=6 Symbols
export function ButtonsTopType6Symbols(p = {}) { return <ButtonsTop {...{"type":"6 symbols"}} {...p} />; }
// figma: Type=5 Symbols
export function ButtonsTopType5Symbols(p = {}) { return <ButtonsTop {...{"type":"5 symbols"}} {...p} />; }
// figma: Type=4 Symbols
export function ButtonsTopType4Symbols(p = {}) { return <ButtonsTop {...{"type":"4 symbols"}} {...p} />; }
// figma: Type=3 Symbols
export function ButtonsTopType3Symbols(p = {}) { return <ButtonsTop {...{"type":"3 symbols"}} {...p} />; }
// figma: Type=2 Symbols
export function ButtonsTopType2Symbols(p = {}) { return <ButtonsTop {...{"type":"2 symbols"}} {...p} />; }
// figma: Type=1 Symbol
export function ButtonsTopType1Symbol(p = {}) { return <ButtonsTop {...{"type":"1 symbol"}} {...p} />; }
// figma: Type=1 Symbol - Prominent
export function ButtonsTopType1SymbolProminent(p = {}) { return <ButtonsTop {...{"type":"1 symbol - prominent"}} {...p} />; }
const __all = [ButtonsTopTypeBack, ButtonsTopTypeTextPrimary, ButtonsTopTypeText, ButtonsTopType6Symbols, ButtonsTopType5Symbols, ButtonsTopType4Symbols, ButtonsTopType3Symbols, ButtonsTopType2Symbols, ButtonsTopType1Symbol, ButtonsTopType1SymbolProminent];
export function ButtonsTopVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ButtonsTopVariants;
