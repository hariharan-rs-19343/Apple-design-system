import * as React from 'react';
import type { LaunchPadProps } from '../../components/labels/LaunchPad';
export interface LaunchPadVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of LaunchPad side by side. */
export declare const LaunchPadVariants: React.FC<LaunchPadVariantsProps>;
export default LaunchPadVariants;
/** Mode=Dark */
export declare const LaunchPadModeDark: React.FC<Partial<LaunchPadProps>>;
/** Mode=Light */
export declare const LaunchPadModeLight: React.FC<Partial<LaunchPadProps>>;
