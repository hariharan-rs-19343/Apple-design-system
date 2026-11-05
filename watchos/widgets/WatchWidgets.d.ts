import * as React from 'react';
export interface WatchWidgetsProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "accessory widget group" | "chart" | "combo" | "gauge" | "labeled content" | "label group" | "label group double" | "label group with icon" | "label group with bar" | "progress view" | "progress view - control with current value" | "progress view - control without current value";
  size?: "40mm" | "42mm" | "44mm" | "46mm" | "49mm";
  line1?: string;
  column5Low?: string;
  column1Low?: string;
  column3Low?: string;
  column2Low?: string;
  symbol?: string;
  column4Low?: string;
  line2?: string;
  line3?: string;
  line4?: string;
  line5?: string;
  line6?: string;
  metric?: string;
  column1High?: string;
  column2High?: string;
  column3High?: string;
  column4High?: string;
  column5High?: string;
}
export declare const WatchWidgets: React.FC<WatchWidgetsProps>;
export default WatchWidgets;
