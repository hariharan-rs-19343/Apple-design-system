import * as React from 'react';
import type { AccessoryBarURLProps } from '../../components/accessory-bars/AccessoryBarURL';
export interface AccessoryBarURLVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of AccessoryBarURL side by side. */
export declare const AccessoryBarURLVariants: React.FC<AccessoryBarURLVariantsProps>;
export default AccessoryBarURLVariants;
/** Mode=Dark */
export declare const AccessoryBarURLModeDark: React.FC<Partial<AccessoryBarURLProps>>;
/** Mode=Light */
export declare const AccessoryBarURLModeLight: React.FC<Partial<AccessoryBarURLProps>>;
