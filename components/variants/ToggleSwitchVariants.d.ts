import * as React from 'react';
import type { ToggleSwitchProps } from '../../components/toggles/ToggleSwitch';
export interface ToggleSwitchVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ToggleSwitch side by side. */
export declare const ToggleSwitchVariants: React.FC<ToggleSwitchVariantsProps>;
export default ToggleSwitchVariants;
/** State=Off */
export declare const ToggleSwitchStateOff: React.FC<Partial<ToggleSwitchProps>>;
/** State=On */
export declare const ToggleSwitchStateOn: React.FC<Partial<ToggleSwitchProps>>;
