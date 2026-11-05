import * as React from 'react';
import type { TrailingDarkProps } from '../../components/views/TrailingDark';
export interface TrailingDarkVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of TrailingDark side by side. */
export declare const TrailingDarkVariants: React.FC<TrailingDarkVariantsProps>;
export default TrailingDarkVariants;
/** Type=Pop-up */
export declare const TrailingDarkTypePopUp: React.FC<Partial<TrailingDarkProps>>;
/** Type=Button */
export declare const TrailingDarkTypeButton: React.FC<Partial<TrailingDarkProps>>;
/** Type=Stepper */
export declare const TrailingDarkTypeStepper: React.FC<Partial<TrailingDarkProps>>;
/** Type=Picker - Date */
export declare const TrailingDarkTypePickerDate: React.FC<Partial<TrailingDarkProps>>;
/** Type=Picker - Time */
export declare const TrailingDarkTypePickerTime: React.FC<Partial<TrailingDarkProps>>;
/** Type=Picker - Date and Time */
export declare const TrailingDarkTypePickerDateAndTime: React.FC<Partial<TrailingDarkProps>>;
/** Type=Toggle */
export declare const TrailingDarkTypeToggle: React.FC<Partial<TrailingDarkProps>>;
/** Type=Disclosure */
export declare const TrailingDarkTypeDisclosure: React.FC<Partial<TrailingDarkProps>>;
/** Type=Default */
export declare const TrailingDarkTypeDefault: React.FC<Partial<TrailingDarkProps>>;
