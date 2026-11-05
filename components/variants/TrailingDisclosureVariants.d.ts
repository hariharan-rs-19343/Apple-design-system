import * as React from 'react';
import type { TrailingDisclosureProps } from '../../components/sidebar-items/TrailingDisclosure';
export interface TrailingDisclosureVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of TrailingDisclosure side by side. */
export declare const TrailingDisclosureVariants: React.FC<TrailingDisclosureVariantsProps>;
export default TrailingDisclosureVariants;
/** Open=True */
export declare const TrailingDisclosureOpenTrue: React.FC<Partial<TrailingDisclosureProps>>;
/** Open=False */
export declare const TrailingDisclosureOpenFalse: React.FC<Partial<TrailingDisclosureProps>>;
