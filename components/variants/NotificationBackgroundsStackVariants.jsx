// Named exports for every Figma variant of NotificationBackgroundsStack
import { NotificationBackgroundsStack } from '../../components/actions/NotificationBackgroundsStack.jsx';
// figma: Mode=Dark
export function NotificationBackgroundsStackModeDark(p = {}) { return <NotificationBackgroundsStack {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function NotificationBackgroundsStackModeLight(p = {}) { return <NotificationBackgroundsStack {...{"mode":"light"}} {...p} />; }
const __all = [NotificationBackgroundsStackModeDark, NotificationBackgroundsStackModeLight];
export function NotificationBackgroundsStackVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default NotificationBackgroundsStackVariants;
