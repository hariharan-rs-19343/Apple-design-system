// Named exports for every Figma variant of AdditionalNotifications
import { AdditionalNotifications } from '../../components/notifications/AdditionalNotifications.jsx';
// figma: Mode=Dark Elevated
export function AdditionalNotificationsModeDarkElevated(p = {}) { return <AdditionalNotifications {...{"mode":"dark elevated"}} {...p} />; }
// figma: Mode=Dark
export function AdditionalNotificationsModeDark(p = {}) { return <AdditionalNotifications {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function AdditionalNotificationsModeLight(p = {}) { return <AdditionalNotifications {...{"mode":"light"}} {...p} />; }
const __all = [AdditionalNotificationsModeDarkElevated, AdditionalNotificationsModeDark, AdditionalNotificationsModeLight];
export function AdditionalNotificationsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AdditionalNotificationsVariants;
