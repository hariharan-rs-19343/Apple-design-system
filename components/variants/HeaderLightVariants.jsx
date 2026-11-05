// Named exports for every Figma variant of HeaderLight
import { HeaderLight } from '../../components/kit/HeaderLight.jsx';
// figma: Width=Inset, Type=Prominent
export function HeaderLightWidthInsetTypeProminent(p = {}) { return <HeaderLight {...{"width":"inset","type":"prominent"}} {...p} />; }
// figma: Width=Full, Type=Prominent
export function HeaderLightWidthFullTypeProminent(p = {}) { return <HeaderLight {...{"width":"full","type":"prominent"}} {...p} />; }
// figma: Width=Inset, Type=Plain
export function HeaderLightWidthInsetTypePlain(p = {}) { return <HeaderLight {...{"width":"inset","type":"plain"}} {...p} />; }
// figma: Width=Full, Type=Plain
export function HeaderLightWidthFullTypePlain(p = {}) { return <HeaderLight {...{"width":"full","type":"plain"}} {...p} />; }
// figma: Width=Inset, Type=Default
export function HeaderLightWidthInsetTypeDefault(p = {}) { return <HeaderLight {...{"width":"inset","type":"default"}} {...p} />; }
// figma: Width=Full, Type=Default
export function HeaderLightWidthFullTypeDefault(p = {}) { return <HeaderLight {...{"width":"full","type":"default"}} {...p} />; }
const __all = [HeaderLightWidthInsetTypeProminent, HeaderLightWidthFullTypeProminent, HeaderLightWidthInsetTypePlain, HeaderLightWidthFullTypePlain, HeaderLightWidthInsetTypeDefault, HeaderLightWidthFullTypeDefault];
export function HeaderLightVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default HeaderLightVariants;
