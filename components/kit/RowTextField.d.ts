import * as React from 'react';
export interface RowTextFieldProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const RowTextField: React.FC<RowTextFieldProps>;
export default RowTextField;
