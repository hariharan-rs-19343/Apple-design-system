import * as React from 'react';
import type { ToolbarProps } from '../../components/accessory-bars/Toolbar';
export interface ToolbarVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Toolbar side by side. */
export declare const ToolbarVariants: React.FC<ToolbarVariantsProps>;
export default ToolbarVariants;
/** State=Disabled */
export declare const ToolbarStateDisabled: React.FC<Partial<ToolbarProps>>;
/** State=Default */
export declare const ToolbarStateDefault: React.FC<Partial<ToolbarProps>>;
