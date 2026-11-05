import * as React from 'react';
import type { GrabberProps } from '../../components/materials/Grabber';
export interface GrabberVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Grabber side by side. */
export declare const GrabberVariants: React.FC<GrabberVariantsProps>;
export default GrabberVariants;
/** Mode=Light */
export declare const GrabberModeLight: React.FC<Partial<GrabberProps>>;
/** Mode=Dark */
export declare const GrabberModeDark: React.FC<Partial<GrabberProps>>;
