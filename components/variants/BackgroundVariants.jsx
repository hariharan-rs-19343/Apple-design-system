// Named exports for every Figma variant of Background
import { Background } from '../../components/backgrounds/Background.jsx';
// figma: Mode=Dark
export function BackgroundModeDark(p = {}) { return <Background {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function BackgroundModeLight(p = {}) { return <Background {...{"mode":"light"}} {...p} />; }
const __all = [BackgroundModeDark, BackgroundModeLight];
export function BackgroundVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default BackgroundVariants;
