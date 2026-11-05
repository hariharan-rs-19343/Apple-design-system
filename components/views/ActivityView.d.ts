import * as React from 'react';
export interface ActivityViewProps {
  className?: string;
  style?: React.CSSProperties;
  showGrabber?: boolean;
  /** Text content; defaults to "AirDrop". */
  text1?: string;
  /** Text content; defaults to "Messages". */
  text2?: string;
  /** Text content; defaults to "Mail". */
  text3?: string;
  /** Text content; defaults to "Notes". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const ActivityView: React.FC<ActivityViewProps>;
export default ActivityView;
