// Named exports for every Figma variant of NotificationMenuBG
import { NotificationMenuBG } from '../../components/page-controls/NotificationMenuBG.jsx';
// figma: Mode=Dark
export function NotificationMenuBGModeDark(p = {}) { return <NotificationMenuBG {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function NotificationMenuBGModeLight(p = {}) { return <NotificationMenuBG {...{"mode":"light"}} {...p} />; }
const __all = [NotificationMenuBGModeDark, NotificationMenuBGModeLight];
export function NotificationMenuBGVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default NotificationMenuBGVariants;
