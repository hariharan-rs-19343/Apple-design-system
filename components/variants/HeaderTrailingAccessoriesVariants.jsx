// Named exports for every Figma variant of HeaderTrailingAccessories
import { HeaderTrailingAccessories } from '../../components/labels/HeaderTrailingAccessories.jsx';
// figma: Type=Disclosure Open
export function HeaderTrailingAccessoriesTypeDisclosureOpen(p = {}) { return <HeaderTrailingAccessories {...{"type":"disclosure open"}} {...p} />; }
// figma: Type=Action
export function HeaderTrailingAccessoriesTypeAction(p = {}) { return <HeaderTrailingAccessories {...{"type":"action"}} {...p} />; }
// figma: Type=Image
export function HeaderTrailingAccessoriesTypeImage(p = {}) { return <HeaderTrailingAccessories {...{"type":"image"}} {...p} />; }
// figma: Type=Button
export function HeaderTrailingAccessoriesTypeButton(p = {}) { return <HeaderTrailingAccessories {...{"type":"button"}} {...p} />; }
const __all = [HeaderTrailingAccessoriesTypeDisclosureOpen, HeaderTrailingAccessoriesTypeAction, HeaderTrailingAccessoriesTypeImage, HeaderTrailingAccessoriesTypeButton];
export function HeaderTrailingAccessoriesVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default HeaderTrailingAccessoriesVariants;
