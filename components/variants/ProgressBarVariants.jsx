// Named exports for every Figma variant of ProgressBar
import { ProgressBar } from '../../components/kit/ProgressBar.jsx';
// figma: Value=100%
export function ProgressBarValue100(p = {}) { return <ProgressBar {...{"value":"100%"}} {...p} />; }
// figma: Value=90%
export function ProgressBarValue90(p = {}) { return <ProgressBar {...{"value":"90%"}} {...p} />; }
// figma: Value=80%
export function ProgressBarValue80(p = {}) { return <ProgressBar {...{"value":"80%"}} {...p} />; }
// figma: Value=70%
export function ProgressBarValue70(p = {}) { return <ProgressBar {...{"value":"70%"}} {...p} />; }
// figma: Value=60%
export function ProgressBarValue60(p = {}) { return <ProgressBar {...{"value":"60%"}} {...p} />; }
// figma: Value=50%
export function ProgressBarValue50(p = {}) { return <ProgressBar {...{"value":"50%"}} {...p} />; }
// figma: Value=40%
export function ProgressBarValue40(p = {}) { return <ProgressBar {...{"value":"40%"}} {...p} />; }
// figma: Value=30%
export function ProgressBarValue30(p = {}) { return <ProgressBar {...{"value":"30%"}} {...p} />; }
// figma: Value=20%
export function ProgressBarValue20(p = {}) { return <ProgressBar {...{"value":"20%"}} {...p} />; }
// figma: Value=10%
export function ProgressBarValue10(p = {}) { return <ProgressBar {...{"value":"10%"}} {...p} />; }
// figma: Value=0%
export function ProgressBarValue0(p = {}) { return <ProgressBar {...{"value":"0%"}} {...p} />; }
const __all = [ProgressBarValue100, ProgressBarValue90, ProgressBarValue80, ProgressBarValue70, ProgressBarValue60, ProgressBarValue50, ProgressBarValue40, ProgressBarValue30, ProgressBarValue20, ProgressBarValue10, ProgressBarValue0];
export function ProgressBarVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ProgressBarVariants;
