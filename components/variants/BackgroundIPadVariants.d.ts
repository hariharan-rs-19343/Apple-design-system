import * as React from 'react';
import type { BackgroundIPadProps } from '../../components/backgrounds/BackgroundIPad';
export interface BackgroundIPadVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of BackgroundIPad side by side. */
export declare const BackgroundIPadVariants: React.FC<BackgroundIPadVariantsProps>;
export default BackgroundIPadVariants;
/** Mode=Dark */
export declare const BackgroundIPadModeDark: React.FC<Partial<BackgroundIPadProps>>;
/** Mode=Light */
export declare const BackgroundIPadModeLight: React.FC<Partial<BackgroundIPadProps>>;
