// Named exports for every Figma variant of Symbol
import { Symbol } from '../../components/tab-bars/Symbol.jsx';
// figma: State=Default, Mode=Dark Elevated
export function SymbolStateDefaultModeDarkElevated(p = {}) { return <Symbol {...{"state":"default","mode":"dark elevated"}} {...p} />; }
// figma: State=Disabled, Mode=Dark Elevated
export function SymbolStateDisabledModeDarkElevated(p = {}) { return <Symbol {...{"state":"disabled","mode":"dark elevated"}} {...p} />; }
// figma: State=Default, Mode=Dark
export function SymbolStateDefaultModeDark(p = {}) { return <Symbol {...{"state":"default","mode":"dark"}} {...p} />; }
// figma: State=Disabled, Mode=Dark
export function SymbolStateDisabledModeDark(p = {}) { return <Symbol {...{"state":"disabled","mode":"dark"}} {...p} />; }
// figma: State=Default, Mode=Light
export function SymbolStateDefaultModeLight(p = {}) { return <Symbol {...{"state":"default","mode":"light"}} {...p} />; }
// figma: State=Disabled, Mode=Light
export function SymbolStateDisabledModeLight(p = {}) { return <Symbol {...{"state":"disabled","mode":"light"}} {...p} />; }
const __all = [SymbolStateDefaultModeDarkElevated, SymbolStateDisabledModeDarkElevated, SymbolStateDefaultModeDark, SymbolStateDisabledModeDark, SymbolStateDefaultModeLight, SymbolStateDisabledModeLight];
export function SymbolVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SymbolVariants;
