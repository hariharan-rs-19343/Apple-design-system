import * as React from 'react';
import type { ControlsBGIPadProps } from '../../components/home-screen/ControlsBGIPad';
export interface ControlsBGIPadVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ControlsBGIPad side by side. */
export declare const ControlsBGIPadVariants: React.FC<ControlsBGIPadVariantsProps>;
export default ControlsBGIPadVariants;
/** On=True */
export declare const ControlsBGIPadOnTrue: React.FC<Partial<ControlsBGIPadProps>>;
/** On=False */
export declare const ControlsBGIPadOnFalse: React.FC<Partial<ControlsBGIPadProps>>;
