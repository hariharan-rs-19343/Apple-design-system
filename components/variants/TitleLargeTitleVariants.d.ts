import * as React from 'react';
import type { TitleLargeTitleProps } from '../../components/navigation/TitleLargeTitle';
export interface TitleLargeTitleVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of TitleLargeTitle side by side. */
export declare const TitleLargeTitleVariants: React.FC<TitleLargeTitleVariantsProps>;
export default TitleLargeTitleVariants;
/** Mode=Dark */
export declare const TitleLargeTitleModeDark: React.FC<Partial<TitleLargeTitleProps>>;
/** Mode=Light */
export declare const TitleLargeTitleModeLight: React.FC<Partial<TitleLargeTitleProps>>;
