import * as React from 'react';
export interface ExamplesTabBarProps {
  className?: string;
  style?: React.CSSProperties;
  splitSearch?: boolean;
  /** Text content; defaults to "Content area". */
  text1?: string;
}
export declare const ExamplesTabBar: React.FC<ExamplesTabBarProps>;
export default ExamplesTabBar;
