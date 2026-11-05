import * as React from 'react';
import type { BackgroundProps } from '../../components/backgrounds/Background';
export interface BackgroundVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Background side by side. */
export declare const BackgroundVariants: React.FC<BackgroundVariantsProps>;
export default BackgroundVariants;
/** Mode=Dark */
export declare const BackgroundModeDark: React.FC<Partial<BackgroundProps>>;
/** Mode=Light */
export declare const BackgroundModeLight: React.FC<Partial<BackgroundProps>>;
