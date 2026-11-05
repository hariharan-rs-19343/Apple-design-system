import * as React from 'react';
import type { ButtonsTopSheetsProps } from '../../components/navigation/ButtonsTopSheets';
export interface ButtonsTopSheetsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ButtonsTopSheets side by side. */
export declare const ButtonsTopSheetsVariants: React.FC<ButtonsTopSheetsVariantsProps>;
export default ButtonsTopSheetsVariants;
/** Mode=Dark, State=Default */
export declare const ButtonsTopSheetsModeDarkStateDefault: React.FC<Partial<ButtonsTopSheetsProps>>;
/** Mode=Dark, State=Preferred */
export declare const ButtonsTopSheetsModeDarkStatePreferred: React.FC<Partial<ButtonsTopSheetsProps>>;
/** Mode=Light, State=Default */
export declare const ButtonsTopSheetsModeLightStateDefault: React.FC<Partial<ButtonsTopSheetsProps>>;
/** Mode=Light, State=Preferred */
export declare const ButtonsTopSheetsModeLightStatePreferred: React.FC<Partial<ButtonsTopSheetsProps>>;
