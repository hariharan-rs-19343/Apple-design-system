import * as React from 'react';
import type { RowButtonProps } from '../../components/lists/RowButton';
export interface RowButtonVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of RowButton side by side. */
export declare const RowButtonVariants: React.FC<RowButtonVariantsProps>;
export default RowButtonVariants;
/** Value=Disabled */
export declare const RowButtonValueDisabled: React.FC<Partial<RowButtonProps>>;
/** Value=Destructive */
export declare const RowButtonValueDestructive: React.FC<Partial<RowButtonProps>>;
/** Value=Default */
export declare const RowButtonValueDefault: React.FC<Partial<RowButtonProps>>;
