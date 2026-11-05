// Named exports for every Figma variant of ButtonsTopSheets
import { ButtonsTopSheets } from '../../components/navigation/ButtonsTopSheets.jsx';
// figma: Mode=Dark, State=Default
export function ButtonsTopSheetsModeDarkStateDefault(p = {}) { return <ButtonsTopSheets {...{"mode":"dark","state":"default"}} {...p} />; }
// figma: Mode=Dark, State=Preferred
export function ButtonsTopSheetsModeDarkStatePreferred(p = {}) { return <ButtonsTopSheets {...{"mode":"dark","state":"preferred"}} {...p} />; }
// figma: Mode=Light, State=Default
export function ButtonsTopSheetsModeLightStateDefault(p = {}) { return <ButtonsTopSheets {...{"mode":"light","state":"default"}} {...p} />; }
// figma: Mode=Light, State=Preferred
export function ButtonsTopSheetsModeLightStatePreferred(p = {}) { return <ButtonsTopSheets {...{"mode":"light","state":"preferred"}} {...p} />; }
const __all = [ButtonsTopSheetsModeDarkStateDefault, ButtonsTopSheetsModeDarkStatePreferred, ButtonsTopSheetsModeLightStateDefault, ButtonsTopSheetsModeLightStatePreferred];
export function ButtonsTopSheetsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ButtonsTopSheetsVariants;
