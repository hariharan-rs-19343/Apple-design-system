// Named exports for every Figma variant of TitleDefaultCompact
import { TitleDefaultCompact } from '../../components/fields/TitleDefaultCompact.jsx';
// figma: Mode=Light, Title Type=Document
export function TitleDefaultCompactModeLightTitleTypeDocument(p = {}) { return <TitleDefaultCompact {...{"mode":"light","titleType":"document"}} {...p} />; }
// figma: Mode=Light, Title Type=Default
export function TitleDefaultCompactModeLightTitleTypeDefault(p = {}) { return <TitleDefaultCompact {...{"mode":"light","titleType":"default"}} {...p} />; }
// figma: Mode=Dark, Title Type=Document
export function TitleDefaultCompactModeDarkTitleTypeDocument(p = {}) { return <TitleDefaultCompact {...{"mode":"dark","titleType":"document"}} {...p} />; }
// figma: Mode=Dark, Title Type=Default
export function TitleDefaultCompactModeDarkTitleTypeDefault(p = {}) { return <TitleDefaultCompact {...{"mode":"dark","titleType":"default"}} {...p} />; }
const __all = [TitleDefaultCompactModeLightTitleTypeDocument, TitleDefaultCompactModeLightTitleTypeDefault, TitleDefaultCompactModeDarkTitleTypeDocument, TitleDefaultCompactModeDarkTitleTypeDefault];
export function TitleDefaultCompactVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default TitleDefaultCompactVariants;
