import * as React from 'react';
export interface MacTracksProps {
  className?: string;
  style?: React.CSSProperties;
  active?: boolean;
  on?: boolean;
  state?: "idle" | "clicked" | "disabled";
  context?: "content area" | "over-glass";
}
export declare const MacTracks: React.FC<MacTracksProps>;
export default MacTracks;
