import * as React from 'react';
import type { HeaderDarkProps } from '../../components/kit/HeaderDark';
export interface HeaderDarkVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of HeaderDark side by side. */
export declare const HeaderDarkVariants: React.FC<HeaderDarkVariantsProps>;
export default HeaderDarkVariants;
/** Open=True */
export declare const HeaderDarkOpenTrue: React.FC<Partial<HeaderDarkProps>>;
/** Open=False */
export declare const HeaderDarkOpenFalse: React.FC<Partial<HeaderDarkProps>>;
