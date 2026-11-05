// Named exports for every Figma variant of ExamplesMenus2
import { ExamplesMenus2 } from '../../components/kit/ExamplesMenus2.jsx';
// figma: Type=Menu and Submenu
export function ExamplesMenus2TypeMenuAndSubmenu(p = {}) { return <ExamplesMenus2 {...{"type":"menu and submenu"}} {...p} />; }
// figma: Type=Edit Menu
export function ExamplesMenus2TypeEditMenu(p = {}) { return <ExamplesMenus2 {...{"type":"edit menu"}} {...p} />; }
const __all = [ExamplesMenus2TypeMenuAndSubmenu, ExamplesMenus2TypeEditMenu];
export function ExamplesMenus2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ExamplesMenus2Variants;
