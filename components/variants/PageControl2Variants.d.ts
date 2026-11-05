import * as React from 'react';
import type { PageControl2Props } from '../../components/page-controls/PageControl2';
export interface PageControl2VariantsProps { style?: React.CSSProperties; }
/** Renders every variant of PageControl2 side by side. */
export declare const PageControl2Variants: React.FC<PageControl2VariantsProps>;
export default PageControl2Variants;
/** Selected=False */
export declare const PageControl2SelectedFalse: React.FC<Partial<PageControl2Props>>;
/** Selected=True */
export declare const PageControl2SelectedTrue: React.FC<Partial<PageControl2Props>>;
