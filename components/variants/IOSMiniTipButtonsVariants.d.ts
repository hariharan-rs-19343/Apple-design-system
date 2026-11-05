import * as React from 'react';
import type { IOSMiniTipButtonsProps } from '../../components/tips/IOSMiniTipButtons';
export interface IOSMiniTipButtonsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of IOSMiniTipButtons side by side. */
export declare const IOSMiniTipButtonsVariants: React.FC<IOSMiniTipButtonsVariantsProps>;
export default IOSMiniTipButtonsVariants;
/** Layout=Stacked, Mode=Light */
export declare const IOSMiniTipButtonsLayoutStackedModeLight: React.FC<Partial<IOSMiniTipButtonsProps>>;
/** Layout=Stacked, Mode=Dark */
export declare const IOSMiniTipButtonsLayoutStackedModeDark: React.FC<Partial<IOSMiniTipButtonsProps>>;
/** Layout=Side-by-side, Mode=Light */
export declare const IOSMiniTipButtonsLayoutSideBySideModeLight: React.FC<Partial<IOSMiniTipButtonsProps>>;
/** Layout=Side-by-side, Mode=Dark */
export declare const IOSMiniTipButtonsLayoutSideBySideModeDark: React.FC<Partial<IOSMiniTipButtonsProps>>;
