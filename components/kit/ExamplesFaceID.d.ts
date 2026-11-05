import * as React from 'react';
export interface ExamplesFaceIDProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "authenticating" | "success";
}
export declare const ExamplesFaceID: React.FC<ExamplesFaceIDProps>;
export default ExamplesFaceID;
