// Named exports for every Figma variant of ExamplesNavigationBarIPhone
import { ExamplesNavigationBarIPhone } from '../../components/kit/ExamplesNavigationBarIPhone.jsx';
// figma: Large Title=True
export function ExamplesNavigationBarIPhoneLargeTitleTrue(p = {}) { return <ExamplesNavigationBarIPhone {...{"largeTitle":true}} {...p} />; }
// figma: Large Title=False
export function ExamplesNavigationBarIPhoneLargeTitleFalse(p = {}) { return <ExamplesNavigationBarIPhone {...{"largeTitle":false}} {...p} />; }
const __all = [ExamplesNavigationBarIPhoneLargeTitleTrue, ExamplesNavigationBarIPhoneLargeTitleFalse];
export function ExamplesNavigationBarIPhoneVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ExamplesNavigationBarIPhoneVariants;
