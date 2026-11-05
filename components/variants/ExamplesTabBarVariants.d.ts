import * as React from 'react';
import type { ExamplesTabBarProps } from '../../components/kit/ExamplesTabBar';
export interface ExamplesTabBarVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ExamplesTabBar side by side. */
export declare const ExamplesTabBarVariants: React.FC<ExamplesTabBarVariantsProps>;
export default ExamplesTabBarVariants;
/** Split Search=False */
export declare const ExamplesTabBarSplitSearchFalse: React.FC<Partial<ExamplesTabBarProps>>;
/** Split Search=True */
export declare const ExamplesTabBarSplitSearchTrue: React.FC<Partial<ExamplesTabBarProps>>;
