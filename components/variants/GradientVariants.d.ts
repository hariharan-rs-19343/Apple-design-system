import * as React from 'react';
import type { GradientProps } from '../../components/backgrounds/Gradient';
export interface GradientVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Gradient side by side. */
export declare const GradientVariants: React.FC<GradientVariantsProps>;
export default GradientVariants;
/** Mode=Dark, Position=Top */
export declare const GradientModeDarkPositionTop: React.FC<Partial<GradientProps>>;
/** Mode=Dark, Position=Bottom */
export declare const GradientModeDarkPositionBottom: React.FC<Partial<GradientProps>>;
/** Mode=Light, Position=Top */
export declare const GradientModeLightPositionTop: React.FC<Partial<GradientProps>>;
/** Mode=Light, Position=Bottom */
export declare const GradientModeLightPositionBottom: React.FC<Partial<GradientProps>>;
