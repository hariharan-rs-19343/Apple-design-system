import * as React from 'react';
import type { IncrementProps } from '../../components/lists/Increment';
export interface IncrementVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Increment side by side. */
export declare const IncrementVariants: React.FC<IncrementVariantsProps>;
export default IncrementVariants;
/** Style=Disabled */
export declare const IncrementStyleDisabled: React.FC<Partial<IncrementProps>>;
/** Style=Pressed */
export declare const IncrementStylePressed: React.FC<Partial<IncrementProps>>;
/** Style=Default */
export declare const IncrementStyleDefault: React.FC<Partial<IncrementProps>>;
