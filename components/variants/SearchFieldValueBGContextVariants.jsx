// Named exports for every Figma variant of SearchFieldValueBGContext
import { SearchFieldValueBGContext } from '../../components/pickers/SearchFieldValueBGContext.jsx';
// figma: State=Typing
export function SearchFieldValueBGContextStateTyping(p = {}) { return <SearchFieldValueBGContext {...{"state":"typing"}} {...p} />; }
// figma: State=Value
export function SearchFieldValueBGContextStateValue(p = {}) { return <SearchFieldValueBGContext {...{"state":"value"}} {...p} />; }
// figma: State=Placeholder
export function SearchFieldValueBGContextStatePlaceholder(p = {}) { return <SearchFieldValueBGContext {...{"state":"placeholder"}} {...p} />; }
const __all = [SearchFieldValueBGContextStateTyping, SearchFieldValueBGContextStateValue, SearchFieldValueBGContextStatePlaceholder];
export function SearchFieldValueBGContextVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SearchFieldValueBGContextVariants;
