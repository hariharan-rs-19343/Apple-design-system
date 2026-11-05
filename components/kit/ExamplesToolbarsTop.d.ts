import * as React from 'react';
export interface ExamplesToolbarsTopProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "compact large title" | "large title" | "title 2 line" | "title 2 line left";
}
export declare const ExamplesToolbarsTop: React.FC<ExamplesToolbarsTopProps>;
export default ExamplesToolbarsTop;
