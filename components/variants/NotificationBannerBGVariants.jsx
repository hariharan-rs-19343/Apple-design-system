// Named exports for every Figma variant of NotificationBannerBG
import { NotificationBannerBG } from '../../components/notifications/NotificationBannerBG.jsx';
// figma: Mode=Dark
export function NotificationBannerBGModeDark(p = {}) { return <NotificationBannerBG {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function NotificationBannerBGModeLight(p = {}) { return <NotificationBannerBG {...{"mode":"light"}} {...p} />; }
const __all = [NotificationBannerBGModeDark, NotificationBannerBGModeLight];
export function NotificationBannerBGVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default NotificationBannerBGVariants;
