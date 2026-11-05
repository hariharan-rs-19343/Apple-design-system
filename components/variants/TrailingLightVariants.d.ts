import * as React from 'react';
import type { TrailingLightProps } from '../../components/text-fields/TrailingLight';
export interface TrailingLightVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of TrailingLight side by side. */
export declare const TrailingLightVariants: React.FC<TrailingLightVariantsProps>;
export default TrailingLightVariants;
/** Type=Pop-up */
export declare const TrailingLightTypePopUp: React.FC<Partial<TrailingLightProps>>;
/** Type=Button */
export declare const TrailingLightTypeButton: React.FC<Partial<TrailingLightProps>>;
/** Type=Stepper */
export declare const TrailingLightTypeStepper: React.FC<Partial<TrailingLightProps>>;
/** Type=Picker - Date */
export declare const TrailingLightTypePickerDate: React.FC<Partial<TrailingLightProps>>;
/** Type=Picker - Time */
export declare const TrailingLightTypePickerTime: React.FC<Partial<TrailingLightProps>>;
/** Type=Picker - Date and Time */
export declare const TrailingLightTypePickerDateAndTime: React.FC<Partial<TrailingLightProps>>;
/** Type=Toggle */
export declare const TrailingLightTypeToggle: React.FC<Partial<TrailingLightProps>>;
/** Type=Disclosure */
export declare const TrailingLightTypeDisclosure: React.FC<Partial<TrailingLightProps>>;
/** Type=Default */
export declare const TrailingLightTypeDefault: React.FC<Partial<TrailingLightProps>>;
