// Named exports for every Figma variant of StatusBarAndMenuBar
import { StatusBarAndMenuBar } from '../../components/home-screen/StatusBarAndMenuBar.jsx';
// figma: Type=Status and menu bar - Windowed
export function StatusBarAndMenuBarTypeStatusAndMenuBarWindowed(p = {}) { return <StatusBarAndMenuBar {...{"type":"status and menu bar - windowed"}} {...p} />; }
// figma: Type=Status and menu bar - Fullscreen
export function StatusBarAndMenuBarTypeStatusAndMenuBarFullscreen(p = {}) { return <StatusBarAndMenuBar {...{"type":"status and menu bar - fullscreen"}} {...p} />; }
// figma: Type=Status bar only
export function StatusBarAndMenuBarTypeStatusBarOnly(p = {}) { return <StatusBarAndMenuBar {...{"type":"status bar only"}} {...p} />; }
const __all = [StatusBarAndMenuBarTypeStatusAndMenuBarWindowed, StatusBarAndMenuBarTypeStatusAndMenuBarFullscreen, StatusBarAndMenuBarTypeStatusBarOnly];
export function StatusBarAndMenuBarVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default StatusBarAndMenuBarVariants;
