import * as React from 'react';
export interface FaceIDProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "authenticating" | "success";
  /** Text content; defaults to "􀆅". */
  text1?: string;
}
export declare const FaceID: React.FC<FaceIDProps>;
export default FaceID;
