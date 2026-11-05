import * as React from 'react';
import type { TabButtonsTextProps } from '../../components/misc/TabButtonsText';
export interface TabButtonsTextVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of TabButtonsText side by side. */
export declare const TabButtonsTextVariants: React.FC<TabButtonsTextVariantsProps>;
export default TabButtonsTextVariants;
/** Mode=Dark, State=Selected */
export declare const TabButtonsTextModeDarkStateSelected: React.FC<Partial<TabButtonsTextProps>>;
/** Mode=Dark Elevated, State=Selected */
export declare const TabButtonsTextModeDarkElevatedStateSelected: React.FC<Partial<TabButtonsTextProps>>;
/** Mode=Dark, State=Unselected */
export declare const TabButtonsTextModeDarkStateUnselected: React.FC<Partial<TabButtonsTextProps>>;
/** Mode=Dark Elevated, State=Unselected */
export declare const TabButtonsTextModeDarkElevatedStateUnselected: React.FC<Partial<TabButtonsTextProps>>;
/** Mode=Light, State=Selected */
export declare const TabButtonsTextModeLightStateSelected: React.FC<Partial<TabButtonsTextProps>>;
/** Mode=Light, State=Unselected */
export declare const TabButtonsTextModeLightStateUnselected: React.FC<Partial<TabButtonsTextProps>>;
