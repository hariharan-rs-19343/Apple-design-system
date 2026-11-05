import * as React from 'react';
import type { ExamplesListProps } from '../../components/kit/ExamplesList';
export interface ExamplesListVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ExamplesList side by side. */
export declare const ExamplesListVariants: React.FC<ExamplesListVariantsProps>;
export default ExamplesListVariants;
/** Type=Full Width + Section Headers */
export declare const ExamplesListTypeFullWidthSectionHeaders: React.FC<Partial<ExamplesListProps>>;
/** Type=Full Width */
export declare const ExamplesListTypeFullWidth: React.FC<Partial<ExamplesListProps>>;
/** Type=Inset */
export declare const ExamplesListTypeInset: React.FC<Partial<ExamplesListProps>>;
