import * as React from 'react';
export interface ComponentHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  componentName?: string;
  showDescription?: boolean;
  link2?: string;
  description?: string;
  showLink2?: boolean;
  showLink1?: boolean;
  link1?: string;
}
export declare const ComponentHeader: React.FC<ComponentHeaderProps>;
export default ComponentHeader;
