// Named exports for every Figma variant of ControlsBGIPhone
import { ControlsBGIPhone } from '../../components/home-screen/ControlsBGIPhone.jsx';
// figma: On=True
export function ControlsBGIPhoneOnTrue(p = {}) { return <ControlsBGIPhone {...{"on":true}} {...p} />; }
// figma: On=False
export function ControlsBGIPhoneOnFalse(p = {}) { return <ControlsBGIPhone {...{"on":false}} {...p} />; }
const __all = [ControlsBGIPhoneOnTrue, ControlsBGIPhoneOnFalse];
export function ControlsBGIPhoneVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ControlsBGIPhoneVariants;
