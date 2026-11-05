import * as React from 'react';
export interface IOSTipBackgroundPopoverProps {
  className?: string;
  style?: React.CSSProperties;
  arrow?: "up - leading" | "up - center" | "up - trailing" | "leading" | "trailing" | "down - leading" | "down - center" | "down - trailing" | "none";
  mode?: "light" | "dark" | "dark elevated";
}
export declare const IOSTipBackgroundPopover: React.FC<IOSTipBackgroundPopoverProps>;
export default IOSTipBackgroundPopover;
