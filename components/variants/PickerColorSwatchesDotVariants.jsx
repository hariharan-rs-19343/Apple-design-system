// Named exports for every Figma variant of PickerColorSwatchesDot
import { PickerColorSwatchesDot } from '../../components/pickers/PickerColorSwatchesDot.jsx';
// figma: State=Selected
export function PickerColorSwatchesDotStateSelected(p = {}) { return <PickerColorSwatchesDot {...{"state":"selected"}} {...p} />; }
// figma: State=Unselected
export function PickerColorSwatchesDotStateUnselected(p = {}) { return <PickerColorSwatchesDot {...{"state":"unselected"}} {...p} />; }
const __all = [PickerColorSwatchesDotStateSelected, PickerColorSwatchesDotStateUnselected];
export function PickerColorSwatchesDotVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default PickerColorSwatchesDotVariants;
