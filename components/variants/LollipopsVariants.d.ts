import * as React from 'react';
import type { LollipopsProps } from '../../components/labels/Lollipops';
export interface LollipopsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Lollipops side by side. */
export declare const LollipopsVariants: React.FC<LollipopsVariantsProps>;
export default LollipopsVariants;
/** Mode=Dark Elevated */
export declare const LollipopsModeDarkElevated: React.FC<Partial<LollipopsProps>>;
/** Mode=Dark */
export declare const LollipopsModeDark: React.FC<Partial<LollipopsProps>>;
/** Mode=Light */
export declare const LollipopsModeLight: React.FC<Partial<LollipopsProps>>;
