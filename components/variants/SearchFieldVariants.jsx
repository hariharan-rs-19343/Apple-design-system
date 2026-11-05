// Named exports for every Figma variant of SearchField
import { SearchField } from '../../components/fields/SearchField.jsx';
// figma: State=Typing
export function SearchFieldStateTyping(p = {}) { return <SearchField {...{"state":"typing"}} {...p} />; }
// figma: State=Focused
export function SearchFieldStateFocused(p = {}) { return <SearchField {...{"state":"focused"}} {...p} />; }
// figma: State=Placeholder
export function SearchFieldStatePlaceholder(p = {}) { return <SearchField {...{"state":"placeholder"}} {...p} />; }
const __all = [SearchFieldStateTyping, SearchFieldStateFocused, SearchFieldStatePlaceholder];
export function SearchFieldVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SearchFieldVariants;
