import * as React from 'react';
import type { TitleSubheadlineProps } from '../../components/navigation/TitleSubheadline';
export interface TitleSubheadlineVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of TitleSubheadline side by side. */
export declare const TitleSubheadlineVariants: React.FC<TitleSubheadlineVariantsProps>;
export default TitleSubheadlineVariants;
/** Mode=Dark */
export declare const TitleSubheadlineModeDark: React.FC<Partial<TitleSubheadlineProps>>;
/** Mode=Light */
export declare const TitleSubheadlineModeLight: React.FC<Partial<TitleSubheadlineProps>>;
