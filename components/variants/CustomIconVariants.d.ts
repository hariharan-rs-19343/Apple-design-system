import * as React from 'react';
import type { CustomIconProps } from '../../components/app-icons/CustomIcon';
export interface CustomIconVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of CustomIcon side by side. */
export declare const CustomIconVariants: React.FC<CustomIconVariantsProps>;
export default CustomIconVariants;
/** Mode=Clear Light */
export declare const CustomIconModeClearLight: React.FC<Partial<CustomIconProps>>;
/** Mode=Dark */
export declare const CustomIconModeDark: React.FC<Partial<CustomIconProps>>;
/** Mode=Default */
export declare const CustomIconModeDefault: React.FC<Partial<CustomIconProps>>;
