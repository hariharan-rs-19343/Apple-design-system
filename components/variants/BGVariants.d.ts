import * as React from 'react';
import type { BGProps } from '../../components/backgrounds/BG';
export interface BGVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of BG side by side. */
export declare const BGVariants: React.FC<BGVariantsProps>;
export default BGVariants;
/** Mode=Dark Elevated */
export declare const BGModeDarkElevated: React.FC<Partial<BGProps>>;
/** Mode=Dark */
export declare const BGModeDark: React.FC<Partial<BGProps>>;
/** Mode=Light */
export declare const BGModeLight: React.FC<Partial<BGProps>>;
