// Named exports for every Figma variant of GroupedTableHeader
import { GroupedTableHeader } from '../../components/kit/GroupedTableHeader.jsx';
// figma: Type=Prominent
export function GroupedTableHeaderTypeProminent(p = {}) { return <GroupedTableHeader {...{"type":"prominent"}} {...p} />; }
// figma: Type=Plain
export function GroupedTableHeaderTypePlain(p = {}) { return <GroupedTableHeader {...{"type":"plain"}} {...p} />; }
// figma: Type=Default
export function GroupedTableHeaderTypeDefault(p = {}) { return <GroupedTableHeader {...{"type":"default"}} {...p} />; }
const __all = [GroupedTableHeaderTypeProminent, GroupedTableHeaderTypePlain, GroupedTableHeaderTypeDefault];
export function GroupedTableHeaderVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default GroupedTableHeaderVariants;
