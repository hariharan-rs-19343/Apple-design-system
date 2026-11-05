// Named exports for every Figma variant of ExamplesSheetsModals
import { ExamplesSheetsModals } from '../../components/kit/ExamplesSheetsModals.jsx';
// figma: Type=Inspector
export function ExamplesSheetsModalsTypeInspector(p = {}) { return <ExamplesSheetsModals {...{"type":"inspector"}} {...p} />; }
// figma: Type=Fullscreen Stack
export function ExamplesSheetsModalsTypeFullscreenStack(p = {}) { return <ExamplesSheetsModals {...{"type":"fullscreen stack"}} {...p} />; }
// figma: Type=Fullscreen
export function ExamplesSheetsModalsTypeFullscreen(p = {}) { return <ExamplesSheetsModals {...{"type":"fullscreen"}} {...p} />; }
const __all = [ExamplesSheetsModalsTypeInspector, ExamplesSheetsModalsTypeFullscreenStack, ExamplesSheetsModalsTypeFullscreen];
export function ExamplesSheetsModalsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ExamplesSheetsModalsVariants;
