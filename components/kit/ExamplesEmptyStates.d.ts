import * as React from 'react';
export interface ExamplesEmptyStatesProps {
  className?: string;
  style?: React.CSSProperties;
  config?: "title and subtitle" | "symbol in circle" | "large symbol";
}
export declare const ExamplesEmptyStates: React.FC<ExamplesEmptyStatesProps>;
export default ExamplesEmptyStates;
