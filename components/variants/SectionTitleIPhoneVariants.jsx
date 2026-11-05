// Named exports for every Figma variant of SectionTitleIPhone
import { SectionTitleIPhone } from '../../components/menus/SectionTitleIPhone.jsx';
// figma: Mode=Dark
export function SectionTitleIPhoneModeDark(p = {}) { return <SectionTitleIPhone {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function SectionTitleIPhoneModeLight(p = {}) { return <SectionTitleIPhone {...{"mode":"light"}} {...p} />; }
const __all = [SectionTitleIPhoneModeDark, SectionTitleIPhoneModeLight];
export function SectionTitleIPhoneVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SectionTitleIPhoneVariants;
