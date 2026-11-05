import * as React from 'react';
import type { SubmenuIndicatorProps } from '../../components/accessory-bars/SubmenuIndicator';
export interface SubmenuIndicatorVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SubmenuIndicator side by side. */
export declare const SubmenuIndicatorVariants: React.FC<SubmenuIndicatorVariantsProps>;
export default SubmenuIndicatorVariants;
/** Open=True */
export declare const SubmenuIndicatorOpenTrue: React.FC<Partial<SubmenuIndicatorProps>>;
/** Open=False */
export declare const SubmenuIndicatorOpenFalse: React.FC<Partial<SubmenuIndicatorProps>>;
