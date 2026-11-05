import * as React from 'react';
import type { ContentsProps } from '../../components/fields/Contents';
export interface ContentsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Contents side by side. */
export declare const ContentsVariants: React.FC<ContentsVariantsProps>;
export default ContentsVariants;
/** Size Class=Compact, Style=Default */
export declare const ContentsSizeClassCompactStyleDefault: React.FC<Partial<ContentsProps>>;
/** Size Class=Compact, Style=Large Title */
export declare const ContentsSizeClassCompactStyleLargeTitle: React.FC<Partial<ContentsProps>>;
/** Size Class=Regular, Style=Default */
export declare const ContentsSizeClassRegularStyleDefault: React.FC<Partial<ContentsProps>>;
/** Size Class=Regular, Style=Large Title */
export declare const ContentsSizeClassRegularStyleLargeTitle: React.FC<Partial<ContentsProps>>;
