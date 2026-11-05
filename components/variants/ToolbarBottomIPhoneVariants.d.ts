import * as React from 'react';
import type { ToolbarBottomIPhoneProps } from '../../components/toolbars/ToolbarBottomIPhone';
export interface ToolbarBottomIPhoneVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ToolbarBottomIPhone side by side. */
export declare const ToolbarBottomIPhoneVariants: React.FC<ToolbarBottomIPhoneVariantsProps>;
export default ToolbarBottomIPhoneVariants;
/** Type=Search with Focus */
export declare const ToolbarBottomIPhoneTypeSearchWithFocus: React.FC<Partial<ToolbarBottomIPhoneProps>>;
/** Type=Search + Leading Item */
export declare const ToolbarBottomIPhoneTypeSearchLeadingItem: React.FC<Partial<ToolbarBottomIPhoneProps>>;
/** Type=Search + Trailing Item */
export declare const ToolbarBottomIPhoneTypeSearchTrailingItem: React.FC<Partial<ToolbarBottomIPhoneProps>>;
/** Type=Search */
export declare const ToolbarBottomIPhoneTypeSearch: React.FC<Partial<ToolbarBottomIPhoneProps>>;
/** Type=Buttons */
export declare const ToolbarBottomIPhoneTypeButtons: React.FC<Partial<ToolbarBottomIPhoneProps>>;
/** Type=Buttons + Page Dots */
export declare const ToolbarBottomIPhoneTypeButtonsPageDots: React.FC<Partial<ToolbarBottomIPhoneProps>>;
