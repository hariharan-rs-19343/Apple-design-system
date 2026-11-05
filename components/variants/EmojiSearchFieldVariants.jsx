// Named exports for every Figma variant of EmojiSearchField
import { EmojiSearchField } from '../../components/accessory-bars/EmojiSearchField.jsx';
// figma: Mode=Dark
export function EmojiSearchFieldModeDark(p = {}) { return <EmojiSearchField {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function EmojiSearchFieldModeLight(p = {}) { return <EmojiSearchField {...{"mode":"light"}} {...p} />; }
const __all = [EmojiSearchFieldModeDark, EmojiSearchFieldModeLight];
export function EmojiSearchFieldVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default EmojiSearchFieldVariants;
