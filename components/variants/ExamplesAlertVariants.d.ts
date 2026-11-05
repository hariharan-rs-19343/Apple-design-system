import * as React from 'react';
import type { ExamplesAlertProps } from '../../components/kit/ExamplesAlert';
export interface ExamplesAlertVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ExamplesAlert side by side. */
export declare const ExamplesAlertVariants: React.FC<ExamplesAlertVariantsProps>;
export default ExamplesAlertVariants;
/** Type=Stacked */
export declare const ExamplesAlertTypeStacked: React.FC<Partial<ExamplesAlertProps>>;
/** Type=Side-by-side */
export declare const ExamplesAlertTypeSideBySide: React.FC<Partial<ExamplesAlertProps>>;
