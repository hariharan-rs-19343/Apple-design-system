// Named exports for every Figma variant of SearchEmoji
import { SearchEmoji } from '../../components/pickers/SearchEmoji.jsx';
// figma: Mode=Dark
export function SearchEmojiModeDark(p = {}) { return <SearchEmoji {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function SearchEmojiModeLight(p = {}) { return <SearchEmoji {...{"mode":"light"}} {...p} />; }
const __all = [SearchEmojiModeDark, SearchEmojiModeLight];
export function SearchEmojiVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SearchEmojiVariants;
