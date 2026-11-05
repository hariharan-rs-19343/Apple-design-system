import * as React from 'react';
import type { SidebarControlProps } from '../../components/accessory-bars/SidebarControl';
export interface SidebarControlVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SidebarControl side by side. */
export declare const SidebarControlVariants: React.FC<SidebarControlVariantsProps>;
export default SidebarControlVariants;
/** Toggle=Sidebar */
export declare const SidebarControlToggleSidebar: React.FC<Partial<SidebarControlProps>>;
/** Toggle=Tab Bar */
export declare const SidebarControlToggleTabBar: React.FC<Partial<SidebarControlProps>>;
