import * as React from 'react';
import type { IndexBarProps } from '../../components/lists/IndexBar';
export interface IndexBarVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of IndexBar side by side. */
export declare const IndexBarVariants: React.FC<IndexBarVariantsProps>;
export default IndexBarVariants;
/** Device=iPad */
export declare const IndexBarDeviceIPad: React.FC<Partial<IndexBarProps>>;
/** Device=iPhone */
export declare const IndexBarDeviceIPhone: React.FC<Partial<IndexBarProps>>;
