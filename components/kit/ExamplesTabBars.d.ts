import * as React from 'react';
export interface ExamplesTabBarsProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "with search" | "without search";
}
export declare const ExamplesTabBars: React.FC<ExamplesTabBarsProps>;
export default ExamplesTabBars;
