import * as React from 'react';
export interface ButtonAddItemProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  /** Text content; defaults to "􀅼". */
  text1?: string;
}
export declare const ButtonAddItem: React.FC<ButtonAddItemProps>;
export default ButtonAddItem;
