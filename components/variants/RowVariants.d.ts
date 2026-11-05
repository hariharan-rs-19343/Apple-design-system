import * as React from 'react';
import type { RowProps } from '../../components/lists/Row';
export interface RowVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Row side by side. */
export declare const RowVariants: React.FC<RowVariantsProps>;
export default RowVariants;
/** Height=Tall */
export declare const RowHeightTall: React.FC<Partial<RowProps>>;
/** Height=Regular */
export declare const RowHeightRegular: React.FC<Partial<RowProps>>;
