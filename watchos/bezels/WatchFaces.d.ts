import * as React from 'react';
export interface WatchFacesProps {
  className?: string;
  style?: React.CSSProperties;
  face?: "flux" | "activity analog" | "modular";
  size?: "49mm" | "46mm" | "44mm" | "42mm" | "40mm";
}
export declare const WatchFaces: React.FC<WatchFacesProps>;
export default WatchFaces;
