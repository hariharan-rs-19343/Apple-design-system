import * as React from 'react';
import type { ButtonsProps } from '../../components/misc/Buttons';
export interface ButtonsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Buttons side by side. */
export declare const ButtonsVariants: React.FC<ButtonsVariantsProps>;
export default ButtonsVariants;
/** Type=Destructive */
export declare const ButtonsTypeDestructive: React.FC<Partial<ButtonsProps>>;
/** Type=Disabled */
export declare const ButtonsTypeDisabled: React.FC<Partial<ButtonsProps>>;
/** Type=Default */
export declare const ButtonsTypeDefault: React.FC<Partial<ButtonsProps>>;
