// Named exports for every Figma variant of ControlsBGIPad
import { ControlsBGIPad } from '../../components/home-screen/ControlsBGIPad.jsx';
// figma: On=True
export function ControlsBGIPadOnTrue(p = {}) { return <ControlsBGIPad {...{"on":true}} {...p} />; }
// figma: On=False
export function ControlsBGIPadOnFalse(p = {}) { return <ControlsBGIPad {...{"on":false}} {...p} />; }
const __all = [ControlsBGIPadOnTrue, ControlsBGIPadOnFalse];
export function ControlsBGIPadVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ControlsBGIPadVariants;
