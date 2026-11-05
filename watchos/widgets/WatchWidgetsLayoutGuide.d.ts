import * as React from 'react';
export interface WatchWidgetsLayoutGuideProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "accessory widget group" | "chart" | "combo" | "gauge" | "labeled content" | "label group" | "label group double" | "label group with icon" | "label group with bar" | "progress view" | "progress view without current value" | "progress view with current value";
  size?: "40mm" | "42mm" | "44mm" | "46mm" | "49mm";
  /** Text content; defaults to "􀓔". */
  text1?: string;
  /** Text content; defaults to "Body". */
  text2?: string;
  /** Text content; defaults to "Body". */
  text3?: string;
  /** Text content; defaults to "Body". */
  text4?: string;
}
export declare const WatchWidgetsLayoutGuide: React.FC<WatchWidgetsLayoutGuideProps>;
export default WatchWidgetsLayoutGuide;
