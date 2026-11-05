import * as React from 'react';
import type { TabButtonsSymbolProps } from '../../components/tab-bars/TabButtonsSymbol';
export interface TabButtonsSymbolVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of TabButtonsSymbol side by side. */
export declare const TabButtonsSymbolVariants: React.FC<TabButtonsSymbolVariantsProps>;
export default TabButtonsSymbolVariants;
/** Mode=Dark, State=Selected */
export declare const TabButtonsSymbolModeDarkStateSelected: React.FC<Partial<TabButtonsSymbolProps>>;
/** Mode=Dark Elevated, State=Selected */
export declare const TabButtonsSymbolModeDarkElevatedStateSelected: React.FC<Partial<TabButtonsSymbolProps>>;
/** Mode=Dark, State=Unselected */
export declare const TabButtonsSymbolModeDarkStateUnselected: React.FC<Partial<TabButtonsSymbolProps>>;
/** Mode=Dark Elevated, State=Unselected */
export declare const TabButtonsSymbolModeDarkElevatedStateUnselected: React.FC<Partial<TabButtonsSymbolProps>>;
/** Mode=Light, State=Selected */
export declare const TabButtonsSymbolModeLightStateSelected: React.FC<Partial<TabButtonsSymbolProps>>;
/** Mode=Light, State=Unselected */
export declare const TabButtonsSymbolModeLightStateUnselected: React.FC<Partial<TabButtonsSymbolProps>>;
