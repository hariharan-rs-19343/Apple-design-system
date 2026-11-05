import * as React from 'react';
export interface ContentsProps {
  className?: string;
  style?: React.CSSProperties;
  showTitleAccessories?: boolean;
  sizeClass?: "compact" | "regular";
  style2?: "large title" | "default";
  showTitle?: boolean;
  showSearch?: boolean;
  showTrailing?: boolean;
  showLeading?: boolean;
  trailingControls?: React.ReactNode;
  leadingControls?: React.ReactNode;
  showPrompt?: boolean;
  /** Text content; defaults to "Title". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Contents: React.FC<ContentsProps>;
export default Contents;
