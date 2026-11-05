// Named exports for every Figma variant of ToolbarTopIPad
import { ToolbarTopIPad } from '../../components/kit/ToolbarTopIPad.jsx';
// figma: Style=Compact Large, Tab Bar=True
export function ToolbarTopIPadStyleCompactLargeTabBarTrue(p = {}) { return <ToolbarTopIPad {...{"style2":"compact large","tabBar":true}} {...p} />; }
// figma: Style=Large Title, Tab Bar=True
export function ToolbarTopIPadStyleLargeTitleTabBarTrue(p = {}) { return <ToolbarTopIPad {...{"style2":"large title","tabBar":true}} {...p} />; }
// figma: Style=Title 2 Line Left, Tab Bar=True
export function ToolbarTopIPadStyleTitle2LineLeftTabBarTrue(p = {}) { return <ToolbarTopIPad {...{"style2":"title 2 line left","tabBar":true}} {...p} />; }
// figma: Style=Title 2 Line, Tab Bar=True
export function ToolbarTopIPadStyleTitle2LineTabBarTrue(p = {}) { return <ToolbarTopIPad {...{"style2":"title 2 line","tabBar":true}} {...p} />; }
// figma: Style=Compact Large, Tab Bar=False
export function ToolbarTopIPadStyleCompactLargeTabBarFalse(p = {}) { return <ToolbarTopIPad {...{"style2":"compact large","tabBar":false}} {...p} />; }
// figma: Style=Large Title, Tab Bar=False
export function ToolbarTopIPadStyleLargeTitleTabBarFalse(p = {}) { return <ToolbarTopIPad {...{"style2":"large title","tabBar":false}} {...p} />; }
// figma: Style=Title 2 Line Left, Tab Bar=False
export function ToolbarTopIPadStyleTitle2LineLeftTabBarFalse(p = {}) { return <ToolbarTopIPad {...{"style2":"title 2 line left","tabBar":false}} {...p} />; }
// figma: Style=Title 2 Line, Tab Bar=False
export function ToolbarTopIPadStyleTitle2LineTabBarFalse(p = {}) { return <ToolbarTopIPad {...{"style2":"title 2 line","tabBar":false}} {...p} />; }
const __all = [ToolbarTopIPadStyleCompactLargeTabBarTrue, ToolbarTopIPadStyleLargeTitleTabBarTrue, ToolbarTopIPadStyleTitle2LineLeftTabBarTrue, ToolbarTopIPadStyleTitle2LineTabBarTrue, ToolbarTopIPadStyleCompactLargeTabBarFalse, ToolbarTopIPadStyleLargeTitleTabBarFalse, ToolbarTopIPadStyleTitle2LineLeftTabBarFalse, ToolbarTopIPadStyleTitle2LineTabBarFalse];
export function ToolbarTopIPadVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ToolbarTopIPadVariants;
