import * as React from 'react';
import type { FieldBGProps } from '../../components/fields/FieldBG';
export interface FieldBGVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of FieldBG side by side. */
export declare const FieldBGVariants: React.FC<FieldBGVariantsProps>;
export default FieldBGVariants;
/** Mode=Dark */
export declare const FieldBGModeDark: React.FC<Partial<FieldBGProps>>;
/** Mode=Light */
export declare const FieldBGModeLight: React.FC<Partial<FieldBGProps>>;
