import * as React from 'react';
import type { ContentsDisclosureProps } from '../../components/lists/ContentsDisclosure';
export interface ContentsDisclosureVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ContentsDisclosure side by side. */
export declare const ContentsDisclosureVariants: React.FC<ContentsDisclosureVariantsProps>;
export default ContentsDisclosureVariants;
/** Disclosed=False */
export declare const ContentsDisclosureDisclosedFalse: React.FC<Partial<ContentsDisclosureProps>>;
/** Disclosed=True */
export declare const ContentsDisclosureDisclosedTrue: React.FC<Partial<ContentsDisclosureProps>>;
