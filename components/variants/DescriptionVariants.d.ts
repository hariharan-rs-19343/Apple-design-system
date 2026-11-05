import * as React from 'react';
import type { DescriptionProps } from '../../components/labels/Description';
export interface DescriptionVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Description side by side. */
export declare const DescriptionVariants: React.FC<DescriptionVariantsProps>;
export default DescriptionVariants;
/** Mode=Dark Elevated */
export declare const DescriptionModeDarkElevated: React.FC<Partial<DescriptionProps>>;
/** Mode=Dark */
export declare const DescriptionModeDark: React.FC<Partial<DescriptionProps>>;
/** Mode=Light */
export declare const DescriptionModeLight: React.FC<Partial<DescriptionProps>>;
