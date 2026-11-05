// Named exports for every Figma variant of Label
import { Label } from '../../components/labels/Label.jsx';
// figma: State=Destructive, Mode=Dark Elevated
export function LabelStateDestructiveModeDarkElevated(p = {}) { return <Label {...{"state":"destructive","mode":"dark elevated"}} {...p} />; }
// figma: State=Destructive, Mode=Dark
export function LabelStateDestructiveModeDark(p = {}) { return <Label {...{"state":"destructive","mode":"dark"}} {...p} />; }
// figma: State=Destructive, Mode=Light
export function LabelStateDestructiveModeLight(p = {}) { return <Label {...{"state":"destructive","mode":"light"}} {...p} />; }
// figma: State=Disabled, Mode=Dark Elevated
export function LabelStateDisabledModeDarkElevated(p = {}) { return <Label {...{"state":"disabled","mode":"dark elevated"}} {...p} />; }
// figma: State=Disabled, Mode=Dark
export function LabelStateDisabledModeDark(p = {}) { return <Label {...{"state":"disabled","mode":"dark"}} {...p} />; }
// figma: State=Disabled, Mode=Light
export function LabelStateDisabledModeLight(p = {}) { return <Label {...{"state":"disabled","mode":"light"}} {...p} />; }
// figma: State=Default, Mode=Dark Elevated
export function LabelStateDefaultModeDarkElevated(p = {}) { return <Label {...{"state":"default","mode":"dark elevated"}} {...p} />; }
// figma: State=Default, Mode=Dark
export function LabelStateDefaultModeDark(p = {}) { return <Label {...{"state":"default","mode":"dark"}} {...p} />; }
// figma: State=Default, Mode=Light
export function LabelStateDefaultModeLight(p = {}) { return <Label {...{"state":"default","mode":"light"}} {...p} />; }
const __all = [LabelStateDestructiveModeDarkElevated, LabelStateDestructiveModeDark, LabelStateDestructiveModeLight, LabelStateDisabledModeDarkElevated, LabelStateDisabledModeDark, LabelStateDisabledModeLight, LabelStateDefaultModeDarkElevated, LabelStateDefaultModeDark, LabelStateDefaultModeLight];
export function LabelVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default LabelVariants;
