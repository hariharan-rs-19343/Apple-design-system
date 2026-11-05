import * as React from 'react';
export interface TrailingProps {
  className?: string;
  style?: React.CSSProperties;
  disclosable?: boolean;
  hasChildren?: boolean;
  showDetail?: boolean;
  detail?: string;
  showSymbol?: boolean;
  trailingSymbol?: string;
}
export declare const Trailing: React.FC<TrailingProps>;
export default Trailing;
