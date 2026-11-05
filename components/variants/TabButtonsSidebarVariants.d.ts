import * as React from 'react';
import type { TabButtonsSidebarProps } from '../../components/tab-bars/TabButtonsSidebar';
export interface TabButtonsSidebarVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of TabButtonsSidebar side by side. */
export declare const TabButtonsSidebarVariants: React.FC<TabButtonsSidebarVariantsProps>;
export default TabButtonsSidebarVariants;
/** Mode=Dark, State=Selected */
export declare const TabButtonsSidebarModeDarkStateSelected: React.FC<Partial<TabButtonsSidebarProps>>;
/** Mode=Dark Elevated, State=Selected */
export declare const TabButtonsSidebarModeDarkElevatedStateSelected: React.FC<Partial<TabButtonsSidebarProps>>;
/** Mode=Light, State=Selected */
export declare const TabButtonsSidebarModeLightStateSelected: React.FC<Partial<TabButtonsSidebarProps>>;
