import * as React from 'react';
export interface WatchExampleProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  desscription?: string;
  type?: "title" | "title + description" | "description only" | "symbol + description" | "title with close button";
  symbol?: string;
}
export declare const WatchExample: React.FC<WatchExampleProps>;
export default WatchExample;
