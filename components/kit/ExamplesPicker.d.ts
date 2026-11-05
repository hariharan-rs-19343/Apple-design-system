import * as React from 'react';
export interface ExamplesPickerProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "wheels of time (time)" | "wheels of time (date)" | "inline";
}
export declare const ExamplesPicker: React.FC<ExamplesPickerProps>;
export default ExamplesPicker;
