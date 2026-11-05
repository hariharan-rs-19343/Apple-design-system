import * as React from 'react';
export interface DisclosureProps {
  className?: string;
  style?: React.CSSProperties;
  tableOpen?: boolean;
  /** Text content; defaults to "􀆊". */
  text1?: string;
}
export declare const Disclosure: React.FC<DisclosureProps>;
export default Disclosure;
