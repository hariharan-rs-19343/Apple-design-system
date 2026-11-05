// Named exports for every Figma variant of NavigationBarIPadMultitaskingCompact
import { NavigationBarIPadMultitaskingCompact } from '../../components/kit/NavigationBarIPadMultitaskingCompact.jsx';
// figma: Style=Large
export function NavigationBarIPadMultitaskingCompactStyleLarge(p = {}) { return <NavigationBarIPadMultitaskingCompact {...{"style2":"large"}} {...p} />; }
// figma: Style=Default
export function NavigationBarIPadMultitaskingCompactStyleDefault(p = {}) { return <NavigationBarIPadMultitaskingCompact {...{"style2":"default"}} {...p} />; }
const __all = [NavigationBarIPadMultitaskingCompactStyleLarge, NavigationBarIPadMultitaskingCompactStyleDefault];
export function NavigationBarIPadMultitaskingCompactVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default NavigationBarIPadMultitaskingCompactVariants;
