import * as React from 'react';
import type { DecrementProps } from '../../components/lists/Decrement';
export interface DecrementVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Decrement side by side. */
export declare const DecrementVariants: React.FC<DecrementVariantsProps>;
export default DecrementVariants;
/** Style=Disabled */
export declare const DecrementStyleDisabled: React.FC<Partial<DecrementProps>>;
/** Style=Pressed */
export declare const DecrementStylePressed: React.FC<Partial<DecrementProps>>;
/** Style=Default */
export declare const DecrementStyleDefault: React.FC<Partial<DecrementProps>>;
