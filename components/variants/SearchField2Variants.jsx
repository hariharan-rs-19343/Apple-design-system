// Named exports for every Figma variant of SearchField2
import { SearchField2 } from '../../components/surfaces/SearchField2.jsx';
// figma: Mode=Dark, State=Typing
export function SearchField2ModeDarkStateTyping(p = {}) { return <SearchField2 {...{"mode":"dark","state":"typing"}} {...p} />; }
// figma: Mode=Dark, State=Value
export function SearchField2ModeDarkStateValue(p = {}) { return <SearchField2 {...{"mode":"dark","state":"value"}} {...p} />; }
// figma: Mode=Dark, State=Placeholder
export function SearchField2ModeDarkStatePlaceholder(p = {}) { return <SearchField2 {...{"mode":"dark","state":"placeholder"}} {...p} />; }
// figma: Mode=Light, State=Typing
export function SearchField2ModeLightStateTyping(p = {}) { return <SearchField2 {...{"mode":"light","state":"typing"}} {...p} />; }
// figma: Mode=Light, State=Value
export function SearchField2ModeLightStateValue(p = {}) { return <SearchField2 {...{"mode":"light","state":"value"}} {...p} />; }
// figma: Mode=Light, State=Placeholder
export function SearchField2ModeLightStatePlaceholder(p = {}) { return <SearchField2 {...{"mode":"light","state":"placeholder"}} {...p} />; }
const __all = [SearchField2ModeDarkStateTyping, SearchField2ModeDarkStateValue, SearchField2ModeDarkStatePlaceholder, SearchField2ModeLightStateTyping, SearchField2ModeLightStateValue, SearchField2ModeLightStatePlaceholder];
export function SearchField2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SearchField2Variants;
