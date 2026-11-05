// Named exports for every Figma variant of SearchBottom
import { SearchBottom } from '../../components/toolbars/SearchBottom.jsx';
// figma: Mode=Dark, State=Typing
export function SearchBottomModeDarkStateTyping(p = {}) { return <SearchBottom {...{"mode":"dark","state":"typing"}} {...p} />; }
// figma: Mode=Dark, State=Value
export function SearchBottomModeDarkStateValue(p = {}) { return <SearchBottom {...{"mode":"dark","state":"value"}} {...p} />; }
// figma: Mode=Dark, State=Placeholder
export function SearchBottomModeDarkStatePlaceholder(p = {}) { return <SearchBottom {...{"mode":"dark","state":"placeholder"}} {...p} />; }
// figma: Mode=Light, State=Typing
export function SearchBottomModeLightStateTyping(p = {}) { return <SearchBottom {...{"mode":"light","state":"typing"}} {...p} />; }
// figma: Mode=Light, State=Placeholder
export function SearchBottomModeLightStatePlaceholder(p = {}) { return <SearchBottom {...{"mode":"light","state":"placeholder"}} {...p} />; }
// figma: Mode=Light, State=Value
export function SearchBottomModeLightStateValue(p = {}) { return <SearchBottom {...{"mode":"light","state":"value"}} {...p} />; }
const __all = [SearchBottomModeDarkStateTyping, SearchBottomModeDarkStateValue, SearchBottomModeDarkStatePlaceholder, SearchBottomModeLightStateTyping, SearchBottomModeLightStatePlaceholder, SearchBottomModeLightStateValue];
export function SearchBottomVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SearchBottomVariants;
