// Named exports for every Figma variant of SearchFieldDark
import { SearchFieldDark } from '../../components/pickers/SearchFieldDark.jsx';
// figma: State=Typing
export function SearchFieldDarkStateTyping(p = {}) { return <SearchFieldDark {...{"state":"typing"}} {...p} />; }
// figma: State=Focused
export function SearchFieldDarkStateFocused(p = {}) { return <SearchFieldDark {...{"state":"focused"}} {...p} />; }
// figma: State=Placeholder
export function SearchFieldDarkStatePlaceholder(p = {}) { return <SearchFieldDark {...{"state":"placeholder"}} {...p} />; }
const __all = [SearchFieldDarkStateTyping, SearchFieldDarkStateFocused, SearchFieldDarkStatePlaceholder];
export function SearchFieldDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SearchFieldDarkVariants;
