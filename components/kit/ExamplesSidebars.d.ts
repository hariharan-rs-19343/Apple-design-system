import * as React from 'react';
export interface ExamplesSidebarsProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "overlay";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ExamplesSidebars: React.FC<ExamplesSidebarsProps>;
export default ExamplesSidebars;
