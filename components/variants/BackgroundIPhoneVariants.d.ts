import * as React from 'react';
import type { BackgroundIPhoneProps } from '../../components/backgrounds/BackgroundIPhone';
export interface BackgroundIPhoneVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of BackgroundIPhone side by side. */
export declare const BackgroundIPhoneVariants: React.FC<BackgroundIPhoneVariantsProps>;
export default BackgroundIPhoneVariants;
/** Mode=Dark */
export declare const BackgroundIPhoneModeDark: React.FC<Partial<BackgroundIPhoneProps>>;
/** Mode=Light */
export declare const BackgroundIPhoneModeLight: React.FC<Partial<BackgroundIPhoneProps>>;
