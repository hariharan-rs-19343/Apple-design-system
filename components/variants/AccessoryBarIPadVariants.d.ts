import * as React from 'react';
import type { AccessoryBarIPadProps } from '../../components/accessory-bars/AccessoryBarIPad';
export interface AccessoryBarIPadVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of AccessoryBarIPad side by side. */
export declare const AccessoryBarIPadVariants: React.FC<AccessoryBarIPadVariantsProps>;
export default AccessoryBarIPadVariants;
/** Mode=Dark */
export declare const AccessoryBarIPadModeDark: React.FC<Partial<AccessoryBarIPadProps>>;
/** Mode=Light */
export declare const AccessoryBarIPadModeLight: React.FC<Partial<AccessoryBarIPadProps>>;
