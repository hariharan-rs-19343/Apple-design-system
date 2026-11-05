import * as React from 'react';
import type { HSQABGProps } from '../../components/home-screen/HSQABG';
export interface HSQABGVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of HSQABG side by side. */
export declare const HSQABGVariants: React.FC<HSQABGVariantsProps>;
export default HSQABGVariants;
/** Mode=Light */
export declare const HSQABGModeLight: React.FC<Partial<HSQABGProps>>;
/** Mode=Dark */
export declare const HSQABGModeDark: React.FC<Partial<HSQABGProps>>;
