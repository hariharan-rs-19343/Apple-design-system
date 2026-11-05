import * as React from 'react';
import type { TitleAndDescriptionProps } from '../../components/misc/TitleAndDescription';
export interface TitleAndDescriptionVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of TitleAndDescription side by side. */
export declare const TitleAndDescriptionVariants: React.FC<TitleAndDescriptionVariantsProps>;
export default TitleAndDescriptionVariants;
/** Mode=Dark Elevated */
export declare const TitleAndDescriptionModeDarkElevated: React.FC<Partial<TitleAndDescriptionProps>>;
/** Mode=Dark */
export declare const TitleAndDescriptionModeDark: React.FC<Partial<TitleAndDescriptionProps>>;
/** Mode=Light */
export declare const TitleAndDescriptionModeLight: React.FC<Partial<TitleAndDescriptionProps>>;
