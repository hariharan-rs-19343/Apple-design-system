import * as React from 'react';
import type { OverlayProps } from '../../components/navigation/Overlay';
export interface OverlayVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Overlay side by side. */
export declare const OverlayVariants: React.FC<OverlayVariantsProps>;
export default OverlayVariants;
/** Mode=Dark */
export declare const OverlayModeDark: React.FC<Partial<OverlayProps>>;
/** Mode=Light */
export declare const OverlayModeLight: React.FC<Partial<OverlayProps>>;
