import * as React from 'react';
import type { HSQAWidgetRowProps } from '../../components/home-screen/HSQAWidgetRow';
export interface HSQAWidgetRowVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of HSQAWidgetRow side by side. */
export declare const HSQAWidgetRowVariants: React.FC<HSQAWidgetRowVariantsProps>;
export default HSQAWidgetRowVariants;
/** Mode=Dark */
export declare const HSQAWidgetRowModeDark: React.FC<Partial<HSQAWidgetRowProps>>;
/** Mode=Light */
export declare const HSQAWidgetRowModeLight: React.FC<Partial<HSQAWidgetRowProps>>;
