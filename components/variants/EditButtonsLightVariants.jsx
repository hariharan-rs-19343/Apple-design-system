// Named exports for every Figma variant of EditButtonsLight
import { EditButtonsLight } from '../../components/lists/EditButtonsLight.jsx';
// figma: State=Remove
export function EditButtonsLightStateRemove(p = {}) { return <EditButtonsLight {...{"state":"remove"}} {...p} />; }
// figma: State=Add
export function EditButtonsLightStateAdd(p = {}) { return <EditButtonsLight {...{"state":"add"}} {...p} />; }
// figma: State=Selected
export function EditButtonsLightStateSelected(p = {}) { return <EditButtonsLight {...{"state":"selected"}} {...p} />; }
// figma: State=Unselected
export function EditButtonsLightStateUnselected(p = {}) { return <EditButtonsLight {...{"state":"unselected"}} {...p} />; }
const __all = [EditButtonsLightStateRemove, EditButtonsLightStateAdd, EditButtonsLightStateSelected, EditButtonsLightStateUnselected];
export function EditButtonsLightVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default EditButtonsLightVariants;
