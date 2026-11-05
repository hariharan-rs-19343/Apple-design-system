// Named exports for every Figma variant of WatchAppIcon
import { WatchAppIcon } from '../../watchos/app-icons/WatchAppIcon.jsx';
// figma: Type=Custom
export function WatchAppIconTypeCustom(p = {}) { return <WatchAppIcon {...{"type":"custom"}} {...p} />; }
// figma: Type=System
export function WatchAppIconTypeSystem(p = {}) { return <WatchAppIcon {...{"type":"system"}} {...p} />; }
const __all = [WatchAppIconTypeCustom, WatchAppIconTypeSystem];
export function WatchAppIconVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchAppIconVariants;
