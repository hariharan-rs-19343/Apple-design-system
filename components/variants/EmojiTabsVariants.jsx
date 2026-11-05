// Named exports for every Figma variant of EmojiTabs
import { EmojiTabs } from '../../components/accessory-bars/EmojiTabs.jsx';
// figma: Mode=Dark
export function EmojiTabsModeDark(p = {}) { return <EmojiTabs {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function EmojiTabsModeLight(p = {}) { return <EmojiTabs {...{"mode":"light"}} {...p} />; }
const __all = [EmojiTabsModeDark, EmojiTabsModeLight];
export function EmojiTabsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default EmojiTabsVariants;
