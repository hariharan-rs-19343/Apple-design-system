// Named exports for every Figma variant of ExamplesNotifications
import { ExamplesNotifications } from '../../components/kit/ExamplesNotifications.jsx';
// figma: Expanded=True
export function ExamplesNotificationsExpandedTrue(p = {}) { return <ExamplesNotifications {...{"expanded":true}} {...p} />; }
// figma: Expanded=False
export function ExamplesNotificationsExpandedFalse(p = {}) { return <ExamplesNotifications {...{"expanded":false}} {...p} />; }
const __all = [ExamplesNotificationsExpandedTrue, ExamplesNotificationsExpandedFalse];
export function ExamplesNotificationsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ExamplesNotificationsVariants;
