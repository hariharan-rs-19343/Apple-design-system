import * as React from 'react';
export interface HSQAWidgetLightProps {
  className?: string;
  style?: React.CSSProperties;
  symbol?: string;
  state?: "selected" | "default";
}
export declare const HSQAWidgetLight: React.FC<HSQAWidgetLightProps>;
export default HSQAWidgetLight;
