// Named exports for every Figma variant of NotificationMaterials
import { NotificationMaterials } from '../../components/notifications/NotificationMaterials.jsx';
// figma: Style=Bottom
export function NotificationMaterialsStyleBottom(p = {}) { return <NotificationMaterials {...{"style2":"bottom"}} {...p} />; }
// figma: Style=Middle
export function NotificationMaterialsStyleMiddle(p = {}) { return <NotificationMaterials {...{"style2":"middle"}} {...p} />; }
// figma: Style=Top
export function NotificationMaterialsStyleTop(p = {}) { return <NotificationMaterials {...{"style2":"top"}} {...p} />; }
const __all = [NotificationMaterialsStyleBottom, NotificationMaterialsStyleMiddle, NotificationMaterialsStyleTop];
export function NotificationMaterialsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default NotificationMaterialsVariants;
