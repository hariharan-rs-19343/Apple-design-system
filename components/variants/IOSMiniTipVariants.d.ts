import * as React from 'react';
import type { IOSMiniTipProps } from '../../components/tips/IOSMiniTip';
export interface IOSMiniTipVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of IOSMiniTip side by side. */
export declare const IOSMiniTipVariants: React.FC<IOSMiniTipVariantsProps>;
export default IOSMiniTipVariants;
/** Style=Hint, Content=Image */
export declare const IOSMiniTipStyleHintContentImage: React.FC<Partial<IOSMiniTipProps>>;
/** Style=Annotation, Content=Image */
export declare const IOSMiniTipStyleAnnotationContentImage: React.FC<Partial<IOSMiniTipProps>>;
/** Style=Popover, Content=Image */
export declare const IOSMiniTipStylePopoverContentImage: React.FC<Partial<IOSMiniTipProps>>;
/** Style=Hint, Content=Symbol */
export declare const IOSMiniTipStyleHintContentSymbol: React.FC<Partial<IOSMiniTipProps>>;
/** Style=Annotation, Content=Symbol */
export declare const IOSMiniTipStyleAnnotationContentSymbol: React.FC<Partial<IOSMiniTipProps>>;
/** Style=Popover, Content=Symbol */
export declare const IOSMiniTipStylePopoverContentSymbol: React.FC<Partial<IOSMiniTipProps>>;
/** Style=Hint, Content=Text Only */
export declare const IOSMiniTipStyleHintContentTextOnly: React.FC<Partial<IOSMiniTipProps>>;
/** Style=Annotation, Content=Text Only */
export declare const IOSMiniTipStyleAnnotationContentTextOnly: React.FC<Partial<IOSMiniTipProps>>;
/** Style=Popover, Content=Text Only */
export declare const IOSMiniTipStylePopoverContentTextOnly: React.FC<Partial<IOSMiniTipProps>>;
