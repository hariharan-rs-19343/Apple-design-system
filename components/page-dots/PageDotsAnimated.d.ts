import * as React from 'react';
export interface PageDotsAnimatedProps {
  className?: string;
  style?: React.CSSProperties;
  /** Number of pages. Default 4. */
  count?: number;
  /** Controlled active page (0-indexed). Omit to let the component manage it. */
  current?: number;
  /** Initial page when uncontrolled. Default 0. */
  defaultCurrent?: number;
  /** Called with the tapped page index. */
  onChange?: (index: number) => void;
  /** "default": active dot widens to a pill twice the dot width (16px) and fades in. "stretch": indicator stretches toward the target dot, then shrinks into it. */
  animation?: "default" | "stretch";
  mode?: "light" | "dark";
  /** "neutral": black/white like iOS. "brand": ZhareHub primary. */
  tint?: "neutral" | "brand";
  /** Show the rounded platter behind the dots. Default false. */
  platter?: boolean;
  /** Total transition time in ms; stretch uses half to extend and half to shrink. Default 360. */
  duration?: number;
  "aria-label"?: string;
}
export declare const PageDotsAnimated: React.FC<PageDotsAnimatedProps>;
export default PageDotsAnimated;
