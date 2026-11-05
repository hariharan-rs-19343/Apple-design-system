// Named exports for every Figma variant of WatchButtonPill
import { WatchButtonPill } from '../../watchos/buttons/WatchButtonPill.jsx';
// figma: Type=Destructive Floating
export function WatchButtonPillTypeDestructiveFloating(p = {}) { return <WatchButtonPill {...{"type":"destructive floating"}} {...p} />; }
// figma: Type=Destructive
export function WatchButtonPillTypeDestructive(p = {}) { return <WatchButtonPill {...{"type":"destructive"}} {...p} />; }
// figma: Type=Tertiary
export function WatchButtonPillTypeTertiary(p = {}) { return <WatchButtonPill {...{"type":"tertiary"}} {...p} />; }
// figma: Type=Secondary
export function WatchButtonPillTypeSecondary(p = {}) { return <WatchButtonPill {...{"type":"secondary"}} {...p} />; }
// figma: Type=Primary Floating
export function WatchButtonPillTypePrimaryFloating(p = {}) { return <WatchButtonPill {...{"type":"primary floating"}} {...p} />; }
// figma: Type=Primary
export function WatchButtonPillTypePrimary(p = {}) { return <WatchButtonPill {...{"type":"primary"}} {...p} />; }
// figma: Type=Default Floating
export function WatchButtonPillTypeDefaultFloating(p = {}) { return <WatchButtonPill {...{"type":"default floating"}} {...p} />; }
// figma: Type=Default
export function WatchButtonPillTypeDefault(p = {}) { return <WatchButtonPill {...{"type":"default"}} {...p} />; }
const __all = [WatchButtonPillTypeDestructiveFloating, WatchButtonPillTypeDestructive, WatchButtonPillTypeTertiary, WatchButtonPillTypeSecondary, WatchButtonPillTypePrimaryFloating, WatchButtonPillTypePrimary, WatchButtonPillTypeDefaultFloating, WatchButtonPillTypeDefault];
export function WatchButtonPillVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchButtonPillVariants;
