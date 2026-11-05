import * as React from 'react';
import type { ControlsBGIPhoneProps } from '../../components/home-screen/ControlsBGIPhone';
export interface ControlsBGIPhoneVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ControlsBGIPhone side by side. */
export declare const ControlsBGIPhoneVariants: React.FC<ControlsBGIPhoneVariantsProps>;
export default ControlsBGIPhoneVariants;
/** On=True */
export declare const ControlsBGIPhoneOnTrue: React.FC<Partial<ControlsBGIPhoneProps>>;
/** On=False */
export declare const ControlsBGIPhoneOnFalse: React.FC<Partial<ControlsBGIPhoneProps>>;
