import * as React from 'react';
import type { CardTopProps } from '../../components/labels/CardTop';
export interface CardTopVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of CardTop side by side. */
export declare const CardTopVariants: React.FC<CardTopVariantsProps>;
export default CardTopVariants;
/** Mode=Dark Elevated */
export declare const CardTopModeDarkElevated: React.FC<Partial<CardTopProps>>;
/** Mode=Dark */
export declare const CardTopModeDark: React.FC<Partial<CardTopProps>>;
/** Mode=Light */
export declare const CardTopModeLight: React.FC<Partial<CardTopProps>>;
