// Named exports for every Figma variant of ExamplesSidebar
import { ExamplesSidebar } from '../../components/examples-sidebar/ExamplesSidebar.jsx';
// figma: Type=List
export function ExamplesSidebarTypeList(p = {}) { return <ExamplesSidebar {...{"type":"list"}} {...p} />; }
// figma: Type=List (Multi-level)
export function ExamplesSidebarTypeListMultiLevel(p = {}) { return <ExamplesSidebar {...{"type":"list (multi-level)"}} {...p} />; }
const __all = [ExamplesSidebarTypeList, ExamplesSidebarTypeListMultiLevel];
export function ExamplesSidebarVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ExamplesSidebarVariants;
