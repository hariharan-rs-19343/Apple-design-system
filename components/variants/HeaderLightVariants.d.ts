import * as React from 'react';
import type { HeaderLightProps } from '../../components/kit/HeaderLight';
export interface HeaderLightVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of HeaderLight side by side. */
export declare const HeaderLightVariants: React.FC<HeaderLightVariantsProps>;
export default HeaderLightVariants;
/** Width=Inset, Type=Prominent */
export declare const HeaderLightWidthInsetTypeProminent: React.FC<Partial<HeaderLightProps>>;
/** Width=Full, Type=Prominent */
export declare const HeaderLightWidthFullTypeProminent: React.FC<Partial<HeaderLightProps>>;
/** Width=Inset, Type=Plain */
export declare const HeaderLightWidthInsetTypePlain: React.FC<Partial<HeaderLightProps>>;
/** Width=Full, Type=Plain */
export declare const HeaderLightWidthFullTypePlain: React.FC<Partial<HeaderLightProps>>;
/** Width=Inset, Type=Default */
export declare const HeaderLightWidthInsetTypeDefault: React.FC<Partial<HeaderLightProps>>;
/** Width=Full, Type=Default */
export declare const HeaderLightWidthFullTypeDefault: React.FC<Partial<HeaderLightProps>>;
