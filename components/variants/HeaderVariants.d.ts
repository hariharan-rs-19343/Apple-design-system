import * as React from 'react';
import type { HeaderProps } from '../../components/labels/Header';
export interface HeaderVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Header side by side. */
export declare const HeaderVariants: React.FC<HeaderVariantsProps>;
export default HeaderVariants;
/** Mode=Dark */
export declare const HeaderModeDark: React.FC<Partial<HeaderProps>>;
/** Mode=Light */
export declare const HeaderModeLight: React.FC<Partial<HeaderProps>>;
