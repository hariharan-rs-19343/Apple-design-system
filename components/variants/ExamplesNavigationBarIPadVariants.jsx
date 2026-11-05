// Named exports for every Figma variant of ExamplesNavigationBarIPad
import { ExamplesNavigationBarIPad } from '../../components/kit/ExamplesNavigationBarIPad.jsx';
// figma: Type=Document Browser
export function ExamplesNavigationBarIPadTypeDocumentBrowser(p = {}) { return <ExamplesNavigationBarIPad {...{"type":"document browser"}} {...p} />; }
// figma: Type=Document
export function ExamplesNavigationBarIPadTypeDocument(p = {}) { return <ExamplesNavigationBarIPad {...{"type":"document"}} {...p} />; }
// figma: Type=Large Title
export function ExamplesNavigationBarIPadTypeLargeTitle(p = {}) { return <ExamplesNavigationBarIPad {...{"type":"large title"}} {...p} />; }
// figma: Type=Default
export function ExamplesNavigationBarIPadTypeDefault(p = {}) { return <ExamplesNavigationBarIPad {...{"type":"default"}} {...p} />; }
const __all = [ExamplesNavigationBarIPadTypeDocumentBrowser, ExamplesNavigationBarIPadTypeDocument, ExamplesNavigationBarIPadTypeLargeTitle, ExamplesNavigationBarIPadTypeDefault];
export function ExamplesNavigationBarIPadVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ExamplesNavigationBarIPadVariants;
