// Named exports for every Figma variant of SegmentedControlButton
import { SegmentedControlButton } from '../../components/toolbars/SegmentedControlButton.jsx';
// figma: Mode=Dark,Selected=False
export function SegmentedControlButtonModeDarkSelectedFalse(p = {}) { return <SegmentedControlButton {...{"mode":"dark","selected":false}} {...p} />; }
// figma: Mode=Dark,Selected=True
export function SegmentedControlButtonModeDarkSelectedTrue(p = {}) { return <SegmentedControlButton {...{"mode":"dark","selected":true}} {...p} />; }
// figma: Mode=Light, Selected=False
export function SegmentedControlButtonModeLightSelectedFalse(p = {}) { return <SegmentedControlButton {...{"mode":"light","selected":false}} {...p} />; }
// figma: Mode=Light, Selected=True
export function SegmentedControlButtonModeLightSelectedTrue(p = {}) { return <SegmentedControlButton {...{"mode":"light","selected":true}} {...p} />; }
const __all = [SegmentedControlButtonModeDarkSelectedFalse, SegmentedControlButtonModeDarkSelectedTrue, SegmentedControlButtonModeLightSelectedFalse, SegmentedControlButtonModeLightSelectedTrue];
export function SegmentedControlButtonVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SegmentedControlButtonVariants;
