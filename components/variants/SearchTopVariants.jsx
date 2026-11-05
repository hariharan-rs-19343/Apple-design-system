// Named exports for every Figma variant of SearchTop
import { SearchTop } from '../../components/toolbars/SearchTop.jsx';
// figma: Mode=Dark, State=Value
export function SearchTopModeDarkStateValue(p = {}) { return <SearchTop {...{"mode":"dark","state":"value"}} {...p} />; }
// figma: Mode=Dark, State=Typing
export function SearchTopModeDarkStateTyping(p = {}) { return <SearchTop {...{"mode":"dark","state":"typing"}} {...p} />; }
// figma: Mode=Dark, State=Placeholder
export function SearchTopModeDarkStatePlaceholder(p = {}) { return <SearchTop {...{"mode":"dark","state":"placeholder"}} {...p} />; }
// figma: Mode=Light, State=Value
export function SearchTopModeLightStateValue(p = {}) { return <SearchTop {...{"mode":"light","state":"value"}} {...p} />; }
// figma: Mode=Light, State=Typing
export function SearchTopModeLightStateTyping(p = {}) { return <SearchTop {...{"mode":"light","state":"typing"}} {...p} />; }
// figma: Mode=Light, State=Placeholder
export function SearchTopModeLightStatePlaceholder(p = {}) { return <SearchTop {...{"mode":"light","state":"placeholder"}} {...p} />; }
const __all = [SearchTopModeDarkStateValue, SearchTopModeDarkStateTyping, SearchTopModeDarkStatePlaceholder, SearchTopModeLightStateValue, SearchTopModeLightStateTyping, SearchTopModeLightStatePlaceholder];
export function SearchTopVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SearchTopVariants;
