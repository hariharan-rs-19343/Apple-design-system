// Named exports for every Figma variant of NotificationBGComposed
import { NotificationBGComposed } from '../../components/notifications/NotificationBGComposed.jsx';
// figma: Mode=Dark, Count=3
export function NotificationBGComposedModeDarkCount3(p = {}) { return <NotificationBGComposed {...{"mode":"dark","count":"3"}} {...p} />; }
// figma: Mode=Dark, Count=2
export function NotificationBGComposedModeDarkCount2(p = {}) { return <NotificationBGComposed {...{"mode":"dark","count":"2"}} {...p} />; }
// figma: Mode=Dark, Count=1
export function NotificationBGComposedModeDarkCount1(p = {}) { return <NotificationBGComposed {...{"mode":"dark","count":"1"}} {...p} />; }
// figma: Mode=Light, Count=3
export function NotificationBGComposedModeLightCount3(p = {}) { return <NotificationBGComposed {...{"mode":"light","count":"3"}} {...p} />; }
// figma: Mode=Light, Count=2
export function NotificationBGComposedModeLightCount2(p = {}) { return <NotificationBGComposed {...{"mode":"light","count":"2"}} {...p} />; }
// figma: Mode=Light, Count=1
export function NotificationBGComposedModeLightCount1(p = {}) { return <NotificationBGComposed {...{"mode":"light","count":"1"}} {...p} />; }
const __all = [NotificationBGComposedModeDarkCount3, NotificationBGComposedModeDarkCount2, NotificationBGComposedModeDarkCount1, NotificationBGComposedModeLightCount3, NotificationBGComposedModeLightCount2, NotificationBGComposedModeLightCount1];
export function NotificationBGComposedVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default NotificationBGComposedVariants;
