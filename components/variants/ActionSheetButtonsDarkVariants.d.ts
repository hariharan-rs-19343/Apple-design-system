import * as React from 'react';
import type { ActionSheetButtonsDarkProps } from '../../components/actions/ActionSheetButtonsDark';
export interface ActionSheetButtonsDarkVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ActionSheetButtonsDark side by side. */
export declare const ActionSheetButtonsDarkVariants: React.FC<ActionSheetButtonsDarkVariantsProps>;
export default ActionSheetButtonsDarkVariants;
/** Type=Destructive */
export declare const ActionSheetButtonsDarkTypeDestructive: React.FC<Partial<ActionSheetButtonsDarkProps>>;
/** Type=Disabled */
export declare const ActionSheetButtonsDarkTypeDisabled: React.FC<Partial<ActionSheetButtonsDarkProps>>;
/** Type=Default */
export declare const ActionSheetButtonsDarkTypeDefault: React.FC<Partial<ActionSheetButtonsDarkProps>>;
