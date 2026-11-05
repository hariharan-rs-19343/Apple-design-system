// Named exports for every Figma variant of WatchExampleNotifications
import { WatchExampleNotifications } from '../../watchos/examples/WatchExampleNotifications.jsx';
// figma: Type=Long Look
export function WatchExampleNotificationsTypeLongLook(p = {}) { return <WatchExampleNotifications {...{"type":"long look"}} {...p} />; }
// figma: Type=Short Look
export function WatchExampleNotificationsTypeShortLook(p = {}) { return <WatchExampleNotifications {...{"type":"short look"}} {...p} />; }
// figma: Type=Banner
export function WatchExampleNotificationsTypeBanner(p = {}) { return <WatchExampleNotifications {...{"type":"banner"}} {...p} />; }
const __all = [WatchExampleNotificationsTypeLongLook, WatchExampleNotificationsTypeShortLook, WatchExampleNotificationsTypeBanner];
export function WatchExampleNotificationsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchExampleNotificationsVariants;
