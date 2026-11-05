import * as React from 'react';
import type { LabelProps } from '../../components/labels/Label';
export interface LabelVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Label side by side. */
export declare const LabelVariants: React.FC<LabelVariantsProps>;
export default LabelVariants;
/** State=Destructive, Mode=Dark Elevated */
export declare const LabelStateDestructiveModeDarkElevated: React.FC<Partial<LabelProps>>;
/** State=Destructive, Mode=Dark */
export declare const LabelStateDestructiveModeDark: React.FC<Partial<LabelProps>>;
/** State=Destructive, Mode=Light */
export declare const LabelStateDestructiveModeLight: React.FC<Partial<LabelProps>>;
/** State=Disabled, Mode=Dark Elevated */
export declare const LabelStateDisabledModeDarkElevated: React.FC<Partial<LabelProps>>;
/** State=Disabled, Mode=Dark */
export declare const LabelStateDisabledModeDark: React.FC<Partial<LabelProps>>;
/** State=Disabled, Mode=Light */
export declare const LabelStateDisabledModeLight: React.FC<Partial<LabelProps>>;
/** State=Default, Mode=Dark Elevated */
export declare const LabelStateDefaultModeDarkElevated: React.FC<Partial<LabelProps>>;
/** State=Default, Mode=Dark */
export declare const LabelStateDefaultModeDark: React.FC<Partial<LabelProps>>;
/** State=Default, Mode=Light */
export declare const LabelStateDefaultModeLight: React.FC<Partial<LabelProps>>;
