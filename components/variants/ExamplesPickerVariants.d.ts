import * as React from 'react';
import type { ExamplesPickerProps } from '../../components/kit/ExamplesPicker';
export interface ExamplesPickerVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ExamplesPicker side by side. */
export declare const ExamplesPickerVariants: React.FC<ExamplesPickerVariantsProps>;
export default ExamplesPickerVariants;
/** Type=Wheels of Time (Date) */
export declare const ExamplesPickerTypeWheelsOfTimeDate: React.FC<Partial<ExamplesPickerProps>>;
/** Type=Wheels of Time (Time) */
export declare const ExamplesPickerTypeWheelsOfTimeTime: React.FC<Partial<ExamplesPickerProps>>;
/** Type=Inline */
export declare const ExamplesPickerTypeInline: React.FC<Partial<ExamplesPickerProps>>;
