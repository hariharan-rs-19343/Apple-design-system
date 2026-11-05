import * as React from 'react';
export interface ActionSheetProps {
  className?: string;
  style?: React.CSSProperties;
  showDescription?: boolean;
  title?: string;
  description?: string;
}
export declare const ActionSheet: React.FC<ActionSheetProps>;
export default ActionSheet;
