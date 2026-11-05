// Named exports for every Figma variant of ProgressBarToolbar
import { ProgressBarToolbar } from '../../components/kit/ProgressBarToolbar.jsx';
// figma: Value=100%
export function ProgressBarToolbarValue100(p = {}) { return <ProgressBarToolbar {...{"value":"100%"}} {...p} />; }
// figma: Value=90%
export function ProgressBarToolbarValue90(p = {}) { return <ProgressBarToolbar {...{"value":"90%"}} {...p} />; }
// figma: Value=80%
export function ProgressBarToolbarValue80(p = {}) { return <ProgressBarToolbar {...{"value":"80%"}} {...p} />; }
// figma: Value=70%
export function ProgressBarToolbarValue70(p = {}) { return <ProgressBarToolbar {...{"value":"70%"}} {...p} />; }
// figma: Value=60%
export function ProgressBarToolbarValue60(p = {}) { return <ProgressBarToolbar {...{"value":"60%"}} {...p} />; }
// figma: Value=50%
export function ProgressBarToolbarValue50(p = {}) { return <ProgressBarToolbar {...{"value":"50%"}} {...p} />; }
// figma: Value=40%
export function ProgressBarToolbarValue40(p = {}) { return <ProgressBarToolbar {...{"value":"40%"}} {...p} />; }
// figma: Value=30%
export function ProgressBarToolbarValue30(p = {}) { return <ProgressBarToolbar {...{"value":"30%"}} {...p} />; }
// figma: Value=20%
export function ProgressBarToolbarValue20(p = {}) { return <ProgressBarToolbar {...{"value":"20%"}} {...p} />; }
// figma: Value=10%
export function ProgressBarToolbarValue10(p = {}) { return <ProgressBarToolbar {...{"value":"10%"}} {...p} />; }
// figma: Value=0%
export function ProgressBarToolbarValue0(p = {}) { return <ProgressBarToolbar {...{"value":"0%"}} {...p} />; }
const __all = [ProgressBarToolbarValue100, ProgressBarToolbarValue90, ProgressBarToolbarValue80, ProgressBarToolbarValue70, ProgressBarToolbarValue60, ProgressBarToolbarValue50, ProgressBarToolbarValue40, ProgressBarToolbarValue30, ProgressBarToolbarValue20, ProgressBarToolbarValue10, ProgressBarToolbarValue0];
export function ProgressBarToolbarVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ProgressBarToolbarVariants;
