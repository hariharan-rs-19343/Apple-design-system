import * as React from 'react';
import type { AccessoryBarWebFormProps } from '../../components/accessory-bars/AccessoryBarWebForm';
export interface AccessoryBarWebFormVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of AccessoryBarWebForm side by side. */
export declare const AccessoryBarWebFormVariants: React.FC<AccessoryBarWebFormVariantsProps>;
export default AccessoryBarWebFormVariants;
/** Mode=Dark */
export declare const AccessoryBarWebFormModeDark: React.FC<Partial<AccessoryBarWebFormProps>>;
/** Mode=Light */
export declare const AccessoryBarWebFormModeLight: React.FC<Partial<AccessoryBarWebFormProps>>;
