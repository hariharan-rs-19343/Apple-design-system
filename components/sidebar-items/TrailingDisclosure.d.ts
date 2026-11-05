import * as React from 'react';
export interface TrailingDisclosureProps {
  className?: string;
  style?: React.CSSProperties;
  open?: boolean;
  /** Text content; defaults to "􀆈". */
  text1?: string;
}
export declare const TrailingDisclosure: React.FC<TrailingDisclosureProps>;
export default TrailingDisclosure;
