// Named exports for every Figma variant of Picker
import { Picker } from '../../components/page-controls/Picker.jsx';
// figma: Position=Last
export function PickerPositionLast(p = {}) { return <Picker {...{"position":"last"}} {...p} />; }
// figma: Position=Middle
export function PickerPositionMiddle(p = {}) { return <Picker {...{"position":"middle"}} {...p} />; }
const __all = [PickerPositionLast, PickerPositionMiddle];
export function PickerVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default PickerVariants;
