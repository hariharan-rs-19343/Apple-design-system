import * as React from 'react';
import type { SwatchProps } from '../../components/page-controls/Swatch';
export interface SwatchVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Swatch side by side. */
export declare const SwatchVariants: React.FC<SwatchVariantsProps>;
export default SwatchVariants;
/** Type=Label, Mode=Dark */
export declare const SwatchTypeLabelModeDark: React.FC<Partial<SwatchProps>>;
/** Type=Color, Mode=Dark */
export declare const SwatchTypeColorModeDark: React.FC<Partial<SwatchProps>>;
/** Type=Label, Mode=Light */
export declare const SwatchTypeLabelModeLight: React.FC<Partial<SwatchProps>>;
/** Type=Color, Mode=Light */
export declare const SwatchTypeColorModeLight: React.FC<Partial<SwatchProps>>;
