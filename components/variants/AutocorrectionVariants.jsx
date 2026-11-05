// Named exports for every Figma variant of Autocorrection
import { Autocorrection } from '../../components/accessory-bars/Autocorrection.jsx';
// figma: Mode=Dark
export function AutocorrectionModeDark(p = {}) { return <Autocorrection {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function AutocorrectionModeLight(p = {}) { return <Autocorrection {...{"mode":"light"}} {...p} />; }
const __all = [AutocorrectionModeDark, AutocorrectionModeLight];
export function AutocorrectionVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AutocorrectionVariants;
