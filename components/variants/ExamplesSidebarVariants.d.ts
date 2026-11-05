import * as React from 'react';
import type { ExamplesSidebarProps } from '../../components/examples-sidebar/ExamplesSidebar';
export interface ExamplesSidebarVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ExamplesSidebar side by side. */
export declare const ExamplesSidebarVariants: React.FC<ExamplesSidebarVariantsProps>;
export default ExamplesSidebarVariants;
/** Type=List */
export declare const ExamplesSidebarTypeList: React.FC<Partial<ExamplesSidebarProps>>;
/** Type=List (Multi-level) */
export declare const ExamplesSidebarTypeListMultiLevel: React.FC<Partial<ExamplesSidebarProps>>;
