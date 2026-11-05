// Named exports for every Figma variant of PickerButton
import { PickerButton } from '../../components/kit/PickerButton.jsx';
// figma: Size=Large, Selected=True
export function PickerButtonSizeLargeSelectedTrue(p = {}) { return <PickerButton {...{"size":"lg","selected":true}} {...p} />; }
// figma: Size=Large, Selected=False
export function PickerButtonSizeLargeSelectedFalse(p = {}) { return <PickerButton {...{"size":"lg","selected":false}} {...p} />; }
// figma: Size=Small, Selected=True
export function PickerButtonSizeSmallSelectedTrue(p = {}) { return <PickerButton {...{"size":"sm","selected":true}} {...p} />; }
// figma: Size=Small, Selected=False
export function PickerButtonSizeSmallSelectedFalse(p = {}) { return <PickerButton {...{"size":"sm","selected":false}} {...p} />; }
const __all = [PickerButtonSizeLargeSelectedTrue, PickerButtonSizeLargeSelectedFalse, PickerButtonSizeSmallSelectedTrue, PickerButtonSizeSmallSelectedFalse];
export function PickerButtonVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default PickerButtonVariants;
