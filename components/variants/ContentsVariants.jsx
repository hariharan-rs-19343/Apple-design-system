// Named exports for every Figma variant of Contents
import { Contents } from '../../components/fields/Contents.jsx';
// figma: Size Class=Compact, Style=Default
export function ContentsSizeClassCompactStyleDefault(p = {}) { return <Contents {...{"sizeClass":"compact","style2":"default"}} {...p} />; }
// figma: Size Class=Compact, Style=Large Title
export function ContentsSizeClassCompactStyleLargeTitle(p = {}) { return <Contents {...{"sizeClass":"compact","style2":"large title"}} {...p} />; }
// figma: Size Class=Regular, Style=Default
export function ContentsSizeClassRegularStyleDefault(p = {}) { return <Contents {...{"sizeClass":"regular","style2":"default"}} {...p} />; }
// figma: Size Class=Regular, Style=Large Title
export function ContentsSizeClassRegularStyleLargeTitle(p = {}) { return <Contents {...{"sizeClass":"regular","style2":"large title"}} {...p} />; }
const __all = [ContentsSizeClassCompactStyleDefault, ContentsSizeClassCompactStyleLargeTitle, ContentsSizeClassRegularStyleDefault, ContentsSizeClassRegularStyleLargeTitle];
export function ContentsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ContentsVariants;
