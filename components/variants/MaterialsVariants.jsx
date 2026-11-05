// Named exports for every Figma variant of Materials
import { Materials } from '../../components/materials/Materials.jsx';
// figma: Style=Chrome
export function MaterialsStyleChrome(p = {}) { return <Materials {...{"style2":"chrome"}} {...p} />; }
// figma: Style=Thick
export function MaterialsStyleThick(p = {}) { return <Materials {...{"style2":"thick"}} {...p} />; }
// figma: Style=Regular
export function MaterialsStyleRegular(p = {}) { return <Materials {...{"style2":"regular"}} {...p} />; }
// figma: Style=Thin
export function MaterialsStyleThin(p = {}) { return <Materials {...{"style2":"thin"}} {...p} />; }
// figma: Style=Ultrathin
export function MaterialsStyleUltrathin(p = {}) { return <Materials {...{"style2":"ultrathin"}} {...p} />; }
const __all = [MaterialsStyleChrome, MaterialsStyleThick, MaterialsStyleRegular, MaterialsStyleThin, MaterialsStyleUltrathin];
export function MaterialsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default MaterialsVariants;
