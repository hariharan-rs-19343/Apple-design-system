import * as React from 'react';
import type { ViewContentsProps } from '../../components/views/ViewContents';
export interface ViewContentsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ViewContents side by side. */
export declare const ViewContentsVariants: React.FC<ViewContentsVariantsProps>;
export default ViewContentsVariants;
/** Mode=Dark */
export declare const ViewContentsModeDark: React.FC<Partial<ViewContentsProps>>;
/** Mode=Light */
export declare const ViewContentsModeLight: React.FC<Partial<ViewContentsProps>>;
