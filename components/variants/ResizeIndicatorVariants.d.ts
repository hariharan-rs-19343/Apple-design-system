import * as React from 'react';
import type { ResizeIndicatorProps } from '../../components/pickers/ResizeIndicator';
export interface ResizeIndicatorVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ResizeIndicator side by side. */
export declare const ResizeIndicatorVariants: React.FC<ResizeIndicatorVariantsProps>;
export default ResizeIndicatorVariants;
/** Mode=Dark Elevated */
export declare const ResizeIndicatorModeDarkElevated: React.FC<Partial<ResizeIndicatorProps>>;
/** Mode=Dark */
export declare const ResizeIndicatorModeDark: React.FC<Partial<ResizeIndicatorProps>>;
/** Mode=Light */
export declare const ResizeIndicatorModeLight: React.FC<Partial<ResizeIndicatorProps>>;
