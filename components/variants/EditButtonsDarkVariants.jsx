// Named exports for every Figma variant of EditButtonsDark
import { EditButtonsDark } from '../../components/actions/EditButtonsDark.jsx';
// figma: State=Remove
export function EditButtonsDarkStateRemove(p = {}) { return <EditButtonsDark {...{"state":"remove"}} {...p} />; }
// figma: State=Add
export function EditButtonsDarkStateAdd(p = {}) { return <EditButtonsDark {...{"state":"add"}} {...p} />; }
// figma: State=Selected
export function EditButtonsDarkStateSelected(p = {}) { return <EditButtonsDark {...{"state":"selected"}} {...p} />; }
// figma: State=Unselected
export function EditButtonsDarkStateUnselected(p = {}) { return <EditButtonsDark {...{"state":"unselected"}} {...p} />; }
const __all = [EditButtonsDarkStateRemove, EditButtonsDarkStateAdd, EditButtonsDarkStateSelected, EditButtonsDarkStateUnselected];
export function EditButtonsDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default EditButtonsDarkVariants;
