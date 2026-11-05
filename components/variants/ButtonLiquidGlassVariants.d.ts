import * as React from 'react';
import type { ButtonLiquidGlassProps } from '../../components/buttons/ButtonLiquidGlass';
export interface ButtonLiquidGlassVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ButtonLiquidGlass side by side. */
export declare const ButtonLiquidGlassVariants: React.FC<ButtonLiquidGlassVariantsProps>;
export default ButtonLiquidGlassVariants;
/** Mode=Dark */
export declare const ButtonLiquidGlassModeDark: React.FC<Partial<ButtonLiquidGlassProps>>;
/** Mode=Light */
export declare const ButtonLiquidGlassModeLight: React.FC<Partial<ButtonLiquidGlassProps>>;
