import * as React from 'react';
import type { SidebarEditButtonProps } from '../../components/sidebar-items/SidebarEditButton';
export interface SidebarEditButtonVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SidebarEditButton side by side. */
export declare const SidebarEditButtonVariants: React.FC<SidebarEditButtonVariantsProps>;
export default SidebarEditButtonVariants;
/** Mode=Dark, Type=Selectable */
export declare const SidebarEditButtonModeDarkTypeSelectable: React.FC<Partial<SidebarEditButtonProps>>;
/** Mode=Dark, Type=Selected */
export declare const SidebarEditButtonModeDarkTypeSelected: React.FC<Partial<SidebarEditButtonProps>>;
/** Mode=Dark, Type=Delete */
export declare const SidebarEditButtonModeDarkTypeDelete: React.FC<Partial<SidebarEditButtonProps>>;
/** Mode=Light, Type=Selectable */
export declare const SidebarEditButtonModeLightTypeSelectable: React.FC<Partial<SidebarEditButtonProps>>;
/** Mode=Light, Type=Selected */
export declare const SidebarEditButtonModeLightTypeSelected: React.FC<Partial<SidebarEditButtonProps>>;
/** Mode=Light, Type=Delete */
export declare const SidebarEditButtonModeLightTypeDelete: React.FC<Partial<SidebarEditButtonProps>>;
