import * as React from 'react';
import type { DisclsoureProps } from '../../components/controls/Disclsoure';
export interface DisclsoureVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Disclsoure side by side. */
export declare const DisclsoureVariants: React.FC<DisclsoureVariantsProps>;
export default DisclsoureVariants;
/** Open=False */
export declare const DisclsoureOpenFalse: React.FC<Partial<DisclsoureProps>>;
/** Open=True */
export declare const DisclsoureOpenTrue: React.FC<Partial<DisclsoureProps>>;
