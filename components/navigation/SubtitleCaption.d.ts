import * as React from 'react';
export interface SubtitleCaptionProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  subtitle?: string;
}
export declare const SubtitleCaption: React.FC<SubtitleCaptionProps>;
export default SubtitleCaption;
