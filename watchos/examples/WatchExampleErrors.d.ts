import * as React from 'react';
export interface WatchExampleErrorsProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "title only" | "title + description" | "description only" | "symbol + description" | "title with close button";
}
export declare const WatchExampleErrors: React.FC<WatchExampleErrorsProps>;
export default WatchExampleErrors;
