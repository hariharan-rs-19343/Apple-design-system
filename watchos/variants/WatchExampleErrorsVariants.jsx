// Named exports for every Figma variant of WatchExampleErrors
import { WatchExampleErrors } from '../../watchos/examples/WatchExampleErrors.jsx';
// figma: Type=Title with Close button
export function WatchExampleErrorsTypeTitleWithCloseButton(p = {}) { return <WatchExampleErrors {...{"type":"title with close button"}} {...p} />; }
// figma: Type=Symbol + Description
export function WatchExampleErrorsTypeSymbolDescription(p = {}) { return <WatchExampleErrors {...{"type":"symbol + description"}} {...p} />; }
// figma: Type=Description only
export function WatchExampleErrorsTypeDescriptionOnly(p = {}) { return <WatchExampleErrors {...{"type":"description only"}} {...p} />; }
// figma: Type=Title + Description
export function WatchExampleErrorsTypeTitleDescription(p = {}) { return <WatchExampleErrors {...{"type":"title + description"}} {...p} />; }
// figma: Type=Title only
export function WatchExampleErrorsTypeTitleOnly(p = {}) { return <WatchExampleErrors {...{"type":"title only"}} {...p} />; }
const __all = [WatchExampleErrorsTypeTitleWithCloseButton, WatchExampleErrorsTypeSymbolDescription, WatchExampleErrorsTypeDescriptionOnly, WatchExampleErrorsTypeTitleDescription, WatchExampleErrorsTypeTitleOnly];
export function WatchExampleErrorsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchExampleErrorsVariants;
