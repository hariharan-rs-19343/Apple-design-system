import * as React from 'react';
import type { DisclosureProps } from '../../components/controls/Disclosure';
export interface DisclosureVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Disclosure side by side. */
export declare const DisclosureVariants: React.FC<DisclosureVariantsProps>;
export default DisclosureVariants;
/** Table Open=False */
export declare const DisclosureTableOpenFalse: React.FC<Partial<DisclosureProps>>;
/** Table Open=True */
export declare const DisclosureTableOpenTrue: React.FC<Partial<DisclosureProps>>;
