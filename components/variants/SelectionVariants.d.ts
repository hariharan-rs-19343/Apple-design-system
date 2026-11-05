import * as React from 'react';
import type { SelectionProps } from '../../components/segmented-controls/Selection';
export interface SelectionVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Selection side by side. */
export declare const SelectionVariants: React.FC<SelectionVariantsProps>;
export default SelectionVariants;
/** Mode=Dark */
export declare const SelectionModeDark: React.FC<Partial<SelectionProps>>;
/** Mode=Light */
export declare const SelectionModeLight: React.FC<Partial<SelectionProps>>;
