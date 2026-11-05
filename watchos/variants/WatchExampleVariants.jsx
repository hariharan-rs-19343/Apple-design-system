// Named exports for every Figma variant of WatchExample
import { WatchExample } from '../../watchos/alerts/WatchExample.jsx';
// figma: Type=Title with Close Button
export function WatchExampleTypeTitleWithCloseButton(p = {}) { return <WatchExample {...{"type":"title with close button"}} {...p} />; }
// figma: Type=Symbol + Description
export function WatchExampleTypeSymbolDescription(p = {}) { return <WatchExample {...{"type":"symbol + description"}} {...p} />; }
// figma: Type=Description Only
export function WatchExampleTypeDescriptionOnly(p = {}) { return <WatchExample {...{"type":"description only"}} {...p} />; }
// figma: Type=Title + Description
export function WatchExampleTypeTitleDescription(p = {}) { return <WatchExample {...{"type":"title + description"}} {...p} />; }
// figma: Type=Title
export function WatchExampleTypeTitle(p = {}) { return <WatchExample {...{"type":"title"}} {...p} />; }
const __all = [WatchExampleTypeTitleWithCloseButton, WatchExampleTypeSymbolDescription, WatchExampleTypeDescriptionOnly, WatchExampleTypeTitleDescription, WatchExampleTypeTitle];
export function WatchExampleVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchExampleVariants;
