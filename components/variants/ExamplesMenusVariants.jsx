// Named exports for every Figma variant of ExamplesMenus
import { ExamplesMenus } from '../../components/kit/ExamplesMenus.jsx';
// figma: Type=Menu
export function ExamplesMenusTypeMenu(p = {}) { return <ExamplesMenus {...{"type":"menu"}} {...p} />; }
// figma: Type=Edit Medium
export function ExamplesMenusTypeEditMedium(p = {}) { return <ExamplesMenus {...{"type":"edit medium"}} {...p} />; }
const __all = [ExamplesMenusTypeMenu, ExamplesMenusTypeEditMedium];
export function ExamplesMenusVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ExamplesMenusVariants;
