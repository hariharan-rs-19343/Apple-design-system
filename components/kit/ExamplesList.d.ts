import * as React from 'react';
export interface ExamplesListProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "full width" | "full width + section headers" | "inset";
}
export declare const ExamplesList: React.FC<ExamplesListProps>;
export default ExamplesList;
