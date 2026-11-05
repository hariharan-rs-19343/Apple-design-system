// Named exports for every Figma variant of NotificationCollapsed
import { NotificationCollapsed } from '../../components/notifications/NotificationCollapsed.jsx';
// figma: Stack=3
export function NotificationCollapsedStack3(p = {}) { return <NotificationCollapsed {...{"stack":"3"}} {...p} />; }
// figma: Stack=2
export function NotificationCollapsedStack2(p = {}) { return <NotificationCollapsed {...{"stack":"2"}} {...p} />; }
// figma: Stack=1
export function NotificationCollapsedStack1(p = {}) { return <NotificationCollapsed {...{"stack":"1"}} {...p} />; }
const __all = [NotificationCollapsedStack3, NotificationCollapsedStack2, NotificationCollapsedStack1];
export function NotificationCollapsedVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default NotificationCollapsedVariants;
