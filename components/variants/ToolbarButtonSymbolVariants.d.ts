import * as React from 'react';
import type { ToolbarButtonSymbolProps } from '../../components/sidebar-items/ToolbarButtonSymbol';
export interface ToolbarButtonSymbolVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ToolbarButtonSymbol side by side. */
export declare const ToolbarButtonSymbolVariants: React.FC<ToolbarButtonSymbolVariantsProps>;
export default ToolbarButtonSymbolVariants;
/** Mode=Dark */
export declare const ToolbarButtonSymbolModeDark: React.FC<Partial<ToolbarButtonSymbolProps>>;
/** Mode=Light */
export declare const ToolbarButtonSymbolModeLight: React.FC<Partial<ToolbarButtonSymbolProps>>;
