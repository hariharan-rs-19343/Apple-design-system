import * as React from 'react';
import type { SubtitleSubheadlineProps } from '../../components/navigation/SubtitleSubheadline';
export interface SubtitleSubheadlineVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SubtitleSubheadline side by side. */
export declare const SubtitleSubheadlineVariants: React.FC<SubtitleSubheadlineVariantsProps>;
export default SubtitleSubheadlineVariants;
/** Mode=Dark */
export declare const SubtitleSubheadlineModeDark: React.FC<Partial<SubtitleSubheadlineProps>>;
/** Mode=Light */
export declare const SubtitleSubheadlineModeLight: React.FC<Partial<SubtitleSubheadlineProps>>;
