import * as React from 'react';
export interface DocumentHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  showThumbnail?: boolean;
  documentTitle?: string;
  showActionButton?: boolean;
  /** Text content; defaults to "􀈂". */
  text1?: string;
}
export declare const DocumentHeader: React.FC<DocumentHeaderProps>;
export default DocumentHeader;
