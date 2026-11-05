import * as React from 'react';
import type { SymbolProps } from '../../components/tab-bars/Symbol';
export interface SymbolVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Symbol side by side. */
export declare const SymbolVariants: React.FC<SymbolVariantsProps>;
export default SymbolVariants;
/** State=Default, Mode=Dark Elevated */
export declare const SymbolStateDefaultModeDarkElevated: React.FC<Partial<SymbolProps>>;
/** State=Disabled, Mode=Dark Elevated */
export declare const SymbolStateDisabledModeDarkElevated: React.FC<Partial<SymbolProps>>;
/** State=Default, Mode=Dark */
export declare const SymbolStateDefaultModeDark: React.FC<Partial<SymbolProps>>;
/** State=Disabled, Mode=Dark */
export declare const SymbolStateDisabledModeDark: React.FC<Partial<SymbolProps>>;
/** State=Default, Mode=Light */
export declare const SymbolStateDefaultModeLight: React.FC<Partial<SymbolProps>>;
/** State=Disabled, Mode=Light */
export declare const SymbolStateDisabledModeLight: React.FC<Partial<SymbolProps>>;
