import * as React from 'react';
import type { ToolbarButtonTextProps } from '../../components/sidebar-items/ToolbarButtonText';
export interface ToolbarButtonTextVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ToolbarButtonText side by side. */
export declare const ToolbarButtonTextVariants: React.FC<ToolbarButtonTextVariantsProps>;
export default ToolbarButtonTextVariants;
/** Mode=Dark */
export declare const ToolbarButtonTextModeDark: React.FC<Partial<ToolbarButtonTextProps>>;
/** Mode=Light */
export declare const ToolbarButtonTextModeLight: React.FC<Partial<ToolbarButtonTextProps>>;
