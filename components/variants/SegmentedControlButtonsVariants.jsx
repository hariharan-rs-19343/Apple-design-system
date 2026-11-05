// Named exports for every Figma variant of SegmentedControlButtons
import { SegmentedControlButtons } from '../../components/segmented-controls/SegmentedControlButtons.jsx';
// figma: State=Selected, Mode=Dark
export function SegmentedControlButtonsStateSelectedModeDark(p = {}) { return <SegmentedControlButtons {...{"state":"selected","mode":"dark"}} {...p} />; }
// figma: State=Default, Mode=Dark
export function SegmentedControlButtonsStateDefaultModeDark(p = {}) { return <SegmentedControlButtons {...{"state":"default","mode":"dark"}} {...p} />; }
// figma: State=Selected, Mode=Light
export function SegmentedControlButtonsStateSelectedModeLight(p = {}) { return <SegmentedControlButtons {...{"state":"selected","mode":"light"}} {...p} />; }
// figma: State=Default, Mode=Light
export function SegmentedControlButtonsStateDefaultModeLight(p = {}) { return <SegmentedControlButtons {...{"state":"default","mode":"light"}} {...p} />; }
const __all = [SegmentedControlButtonsStateSelectedModeDark, SegmentedControlButtonsStateDefaultModeDark, SegmentedControlButtonsStateSelectedModeLight, SegmentedControlButtonsStateDefaultModeLight];
export function SegmentedControlButtonsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SegmentedControlButtonsVariants;
