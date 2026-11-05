import * as React from 'react';
import type { SelectionBGProps } from '../../components/segmented-controls/SelectionBG';
export interface SelectionBGVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SelectionBG side by side. */
export declare const SelectionBGVariants: React.FC<SelectionBGVariantsProps>;
export default SelectionBGVariants;
/** Mode=Dark */
export declare const SelectionBGModeDark: React.FC<Partial<SelectionBGProps>>;
/** Mode=Light */
export declare const SelectionBGModeLight: React.FC<Partial<SelectionBGProps>>;
