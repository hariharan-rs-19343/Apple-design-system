import * as React from 'react';
export interface PickerButtonProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "lg";
  selected?: boolean;
}
export declare const PickerButton: React.FC<PickerButtonProps>;
export default PickerButton;
