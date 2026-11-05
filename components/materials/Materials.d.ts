import * as React from 'react';
export interface MaterialsProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "ultrathin" | "thin" | "regular" | "thick" | "chrome";
}
export declare const Materials: React.FC<MaterialsProps>;
export default Materials;
