// Named exports for every Figma variant of SearchAccessory
import { SearchAccessory } from '../../components/toolbars/SearchAccessory.jsx';
// figma: Show Filters=True
export function SearchAccessoryShowFiltersTrue(p = {}) { return <SearchAccessory {...{"showFilters":true}} {...p} />; }
// figma: Show Filters=False
export function SearchAccessoryShowFiltersFalse(p = {}) { return <SearchAccessory {...{"showFilters":false}} {...p} />; }
const __all = [SearchAccessoryShowFiltersTrue, SearchAccessoryShowFiltersFalse];
export function SearchAccessoryVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SearchAccessoryVariants;
