import * as React from 'react';
import type { ExamplesTabBarsProps } from '../../components/kit/ExamplesTabBars';
export interface ExamplesTabBarsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ExamplesTabBars side by side. */
export declare const ExamplesTabBarsVariants: React.FC<ExamplesTabBarsVariantsProps>;
export default ExamplesTabBarsVariants;
/** Type=With Search */
export declare const ExamplesTabBarsTypeWithSearch: React.FC<Partial<ExamplesTabBarsProps>>;
/** Type=Without Search */
export declare const ExamplesTabBarsTypeWithoutSearch: React.FC<Partial<ExamplesTabBarsProps>>;
