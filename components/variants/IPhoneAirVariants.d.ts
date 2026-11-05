import * as React from 'react';
import type { IPhoneAirProps } from '../../components/kit/IPhoneAir';
export interface IPhoneAirVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of IPhoneAir side by side. */
export declare const IPhoneAirVariants: React.FC<IPhoneAirVariantsProps>;
export default IPhoneAirVariants;
/** Color=Cloud White */
export declare const IPhoneAirColorCloudWhite: React.FC<Partial<IPhoneAirProps>>;
/** Color=Light Gold */
export declare const IPhoneAirColorLightGold: React.FC<Partial<IPhoneAirProps>>;
/** Color=Sky Blue */
export declare const IPhoneAirColorSkyBlue: React.FC<Partial<IPhoneAirProps>>;
/** Color=Space Black */
export declare const IPhoneAirColorSpaceBlack: React.FC<Partial<IPhoneAirProps>>;
