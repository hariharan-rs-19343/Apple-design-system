import * as React from 'react';
export interface ContactProps {
  className?: string;
  style?: React.CSSProperties;
  people?: "1" | "2";
  firstName?: string;
  lastName?: string;
  names?: string;
  ofPeople?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Contact: React.FC<ContactProps>;
export default Contact;
