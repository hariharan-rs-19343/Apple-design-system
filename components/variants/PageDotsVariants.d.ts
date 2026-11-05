import * as React from 'react';
import type { PageDotsProps } from '../../components/tab-bars/PageDots';
export interface PageDotsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of PageDots side by side. */
export declare const PageDotsVariants: React.FC<PageDotsVariantsProps>;
export default PageDotsVariants;
/** Mode=Dark,Selected=False */
export declare const PageDotsModeDarkSelectedFalse: React.FC<Partial<PageDotsProps>>;
/** Mode=Dark,Selected=True */
export declare const PageDotsModeDarkSelectedTrue: React.FC<Partial<PageDotsProps>>;
/** Mode=Light,Selected=False */
export declare const PageDotsModeLightSelectedFalse: React.FC<Partial<PageDotsProps>>;
/** Mode=Light,Selected=True */
export declare const PageDotsModeLightSelectedTrue: React.FC<Partial<PageDotsProps>>;
