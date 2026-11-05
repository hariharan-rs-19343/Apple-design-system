// Named exports for every Figma variant of WatchNavigationBar
import { WatchNavigationBar } from '../../watchos/navigation/WatchNavigationBar.jsx';
// figma: Type=Modal - Text Buttons
export function WatchNavigationBarTypeModalTextButtons(p = {}) { return <WatchNavigationBar {...{"type":"modal - text buttons"}} {...p} />; }
// figma: Type=Modal - Text Confirm Button
export function WatchNavigationBarTypeModalTextConfirmButton(p = {}) { return <WatchNavigationBar {...{"type":"modal - text confirm button"}} {...p} />; }
// figma: Type=Modal - 1 Control
export function WatchNavigationBarTypeModal1Control(p = {}) { return <WatchNavigationBar {...{"type":"modal - 1 control"}} {...p} />; }
// figma: Type=Modal - Default
export function WatchNavigationBarTypeModalDefault(p = {}) { return <WatchNavigationBar {...{"type":"modal - default"}} {...p} />; }
// figma: Type=Child - Status + Title
export function WatchNavigationBarTypeChildStatusTitle(p = {}) { return <WatchNavigationBar {...{"type":"child - status + title"}} {...p} />; }
// figma: Type=Center Aligned
export function WatchNavigationBarTypeCenterAligned(p = {}) { return <WatchNavigationBar {...{"type":"center aligned"}} {...p} />; }
// figma: Type=Status + Large Title
export function WatchNavigationBarTypeStatusLargeTitle(p = {}) { return <WatchNavigationBar {...{"type":"status + large title"}} {...p} />; }
// figma: Type=Status + Title
export function WatchNavigationBarTypeStatusTitle(p = {}) { return <WatchNavigationBar {...{"type":"status + title"}} {...p} />; }
// figma: Type=Status Bar
export function WatchNavigationBarTypeStatusBar(p = {}) { return <WatchNavigationBar {...{"type":"status bar"}} {...p} />; }
const __all = [WatchNavigationBarTypeModalTextButtons, WatchNavigationBarTypeModalTextConfirmButton, WatchNavigationBarTypeModal1Control, WatchNavigationBarTypeModalDefault, WatchNavigationBarTypeChildStatusTitle, WatchNavigationBarTypeCenterAligned, WatchNavigationBarTypeStatusLargeTitle, WatchNavigationBarTypeStatusTitle, WatchNavigationBarTypeStatusBar];
export function WatchNavigationBarVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchNavigationBarVariants;
