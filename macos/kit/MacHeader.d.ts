import * as React from 'react';
export interface MacHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  showLink2?: boolean;
  component?: string;
  description?: string;
  /** Text content; defaults to "Human Interface Guidelines 􀄫". */
  text1?: string;
  /** Text content; defaults to "Human Interface Guidelines". */
  text2?: string;
}
export declare const MacHeader: React.FC<MacHeaderProps>;
export default MacHeader;
