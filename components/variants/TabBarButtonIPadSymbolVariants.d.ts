import * as React from 'react';
import type { TabBarButtonIPadSymbolProps } from '../../components/tab-bars/TabBarButtonIPadSymbol';
export interface TabBarButtonIPadSymbolVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of TabBarButtonIPadSymbol side by side. */
export declare const TabBarButtonIPadSymbolVariants: React.FC<TabBarButtonIPadSymbolVariantsProps>;
export default TabBarButtonIPadSymbolVariants;
/** Selected=False, Mode=Light */
export declare const TabBarButtonIPadSymbolSelectedFalseModeLight: React.FC<Partial<TabBarButtonIPadSymbolProps>>;
/** Selected=True, Mode=Light */
export declare const TabBarButtonIPadSymbolSelectedTrueModeLight: React.FC<Partial<TabBarButtonIPadSymbolProps>>;
/** Mode=Dark,Selected=False */
export declare const TabBarButtonIPadSymbolModeDarkSelectedFalse: React.FC<Partial<TabBarButtonIPadSymbolProps>>;
/** Mode=Dark,Selected=True */
export declare const TabBarButtonIPadSymbolModeDarkSelectedTrue: React.FC<Partial<TabBarButtonIPadSymbolProps>>;
