import * as React from 'react';
import type { TrailingProps } from '../../components/misc/Trailing';
export interface TrailingVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Trailing side by side. */
export declare const TrailingVariants: React.FC<TrailingVariantsProps>;
export default TrailingVariants;
/** Disclosable=False */
export declare const TrailingDisclosableFalse: React.FC<Partial<TrailingProps>>;
/** Disclosable=True */
export declare const TrailingDisclosableTrue: React.FC<Partial<TrailingProps>>;
