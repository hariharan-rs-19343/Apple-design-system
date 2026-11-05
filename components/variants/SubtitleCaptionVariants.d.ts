import * as React from 'react';
import type { SubtitleCaptionProps } from '../../components/navigation/SubtitleCaption';
export interface SubtitleCaptionVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SubtitleCaption side by side. */
export declare const SubtitleCaptionVariants: React.FC<SubtitleCaptionVariantsProps>;
export default SubtitleCaptionVariants;
/** Mode=Dark */
export declare const SubtitleCaptionModeDark: React.FC<Partial<SubtitleCaptionProps>>;
/** Mode=Light */
export declare const SubtitleCaptionModeLight: React.FC<Partial<SubtitleCaptionProps>>;
