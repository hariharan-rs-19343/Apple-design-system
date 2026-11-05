// Named exports for every Figma variant of HomeIndicator
import { HomeIndicator } from '../../components/bezels/HomeIndicator.jsx';
// figma: Device=iPhone, Orientation=Portrait
export function HomeIndicatorDeviceIPhoneOrientationPortrait(p = {}) { return <HomeIndicator {...{"device":"iPhone","orientation":"portrait"}} {...p} />; }
// figma: Device=iPhone, Orientation=Landscape
export function HomeIndicatorDeviceIPhoneOrientationLandscape(p = {}) { return <HomeIndicator {...{"device":"iPhone","orientation":"landscape"}} {...p} />; }
// figma: Device=iPad, Orientation=Portrait
export function HomeIndicatorDeviceIPadOrientationPortrait(p = {}) { return <HomeIndicator {...{"device":"iPad","orientation":"portrait"}} {...p} />; }
// figma: Device=iPad, Orientation=Landscape
export function HomeIndicatorDeviceIPadOrientationLandscape(p = {}) { return <HomeIndicator {...{"device":"iPad","orientation":"landscape"}} {...p} />; }
const __all = [HomeIndicatorDeviceIPhoneOrientationPortrait, HomeIndicatorDeviceIPhoneOrientationLandscape, HomeIndicatorDeviceIPadOrientationPortrait, HomeIndicatorDeviceIPadOrientationLandscape];
export function HomeIndicatorVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default HomeIndicatorVariants;
