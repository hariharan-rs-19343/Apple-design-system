import * as React from 'react';
import type { IPhone15ProProps } from '../../components/kit/IPhone15Pro';
export interface IPhone15ProVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of IPhone15Pro side by side. */
export declare const IPhone15ProVariants: React.FC<IPhone15ProVariantsProps>;
export default IPhone15ProVariants;
/** Style=Display only */
export declare const IPhone15ProStyleDisplayOnly: React.FC<Partial<IPhone15ProProps>>;
/** Style=Bezel */
export declare const IPhone15ProStyleBezel: React.FC<Partial<IPhone15ProProps>>;
