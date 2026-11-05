// Named exports for every Figma variant of Suggestion
import { Suggestion } from '../../components/accessory-bars/Suggestion.jsx';
// figma: Mode=Dark
export function SuggestionModeDark(p = {}) { return <Suggestion {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function SuggestionModeLight(p = {}) { return <Suggestion {...{"mode":"light"}} {...p} />; }
const __all = [SuggestionModeDark, SuggestionModeLight];
export function SuggestionVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SuggestionVariants;
