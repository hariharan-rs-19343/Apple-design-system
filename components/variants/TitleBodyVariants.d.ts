import * as React from 'react';
import type { TitleBodyProps } from '../../components/navigation/TitleBody';
export interface TitleBodyVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of TitleBody side by side. */
export declare const TitleBodyVariants: React.FC<TitleBodyVariantsProps>;
export default TitleBodyVariants;
/** Mode=Dark */
export declare const TitleBodyModeDark: React.FC<Partial<TitleBodyProps>>;
/** Mode=Light */
export declare const TitleBodyModeLight: React.FC<Partial<TitleBodyProps>>;
