// Named exports for every Figma variant of IOSMiniTip
import { IOSMiniTip } from '../../components/tips/IOSMiniTip.jsx';
// figma: Style=Hint, Content=Image
export function IOSMiniTipStyleHintContentImage(p = {}) { return <IOSMiniTip {...{"style2":"hint","content":"image"}} {...p} />; }
// figma: Style=Annotation, Content=Image
export function IOSMiniTipStyleAnnotationContentImage(p = {}) { return <IOSMiniTip {...{"style2":"annotation","content":"image"}} {...p} />; }
// figma: Style=Popover, Content=Image
export function IOSMiniTipStylePopoverContentImage(p = {}) { return <IOSMiniTip {...{"style2":"popover","content":"image"}} {...p} />; }
// figma: Style=Hint, Content=Symbol
export function IOSMiniTipStyleHintContentSymbol(p = {}) { return <IOSMiniTip {...{"style2":"hint","content":"symbol"}} {...p} />; }
// figma: Style=Annotation, Content=Symbol
export function IOSMiniTipStyleAnnotationContentSymbol(p = {}) { return <IOSMiniTip {...{"style2":"annotation","content":"symbol"}} {...p} />; }
// figma: Style=Popover, Content=Symbol
export function IOSMiniTipStylePopoverContentSymbol(p = {}) { return <IOSMiniTip {...{"style2":"popover","content":"symbol"}} {...p} />; }
// figma: Style=Hint, Content=Text Only
export function IOSMiniTipStyleHintContentTextOnly(p = {}) { return <IOSMiniTip {...{"style2":"hint","content":"text only"}} {...p} />; }
// figma: Style=Annotation, Content=Text Only
export function IOSMiniTipStyleAnnotationContentTextOnly(p = {}) { return <IOSMiniTip {...{"style2":"annotation","content":"text only"}} {...p} />; }
// figma: Style=Popover, Content=Text Only
export function IOSMiniTipStylePopoverContentTextOnly(p = {}) { return <IOSMiniTip {...{"style2":"popover","content":"text only"}} {...p} />; }
const __all = [IOSMiniTipStyleHintContentImage, IOSMiniTipStyleAnnotationContentImage, IOSMiniTipStylePopoverContentImage, IOSMiniTipStyleHintContentSymbol, IOSMiniTipStyleAnnotationContentSymbol, IOSMiniTipStylePopoverContentSymbol, IOSMiniTipStyleHintContentTextOnly, IOSMiniTipStyleAnnotationContentTextOnly, IOSMiniTipStylePopoverContentTextOnly];
export function IOSMiniTipVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default IOSMiniTipVariants;
