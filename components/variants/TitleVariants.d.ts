import * as React from 'react';
import type { TitleProps } from '../../components/views/Title';
export interface TitleVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Title side by side. */
export declare const TitleVariants: React.FC<TitleVariantsProps>;
export default TitleVariants;
/** Mode=Dark */
export declare const TitleModeDark: React.FC<Partial<TitleProps>>;
/** Mode=Light */
export declare const TitleModeLight: React.FC<Partial<TitleProps>>;
