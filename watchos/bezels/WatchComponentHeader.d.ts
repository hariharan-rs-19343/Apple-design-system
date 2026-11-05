import * as React from 'react';
export interface WatchComponentHeaderProps {
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
export declare const WatchComponentHeader: React.FC<WatchComponentHeaderProps>;
export default WatchComponentHeader;
