import * as React from 'react';
import type { SidebarSearchFieldProps } from '../../components/sidebar-items/SidebarSearchField';
export interface SidebarSearchFieldVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SidebarSearchField side by side. */
export declare const SidebarSearchFieldVariants: React.FC<SidebarSearchFieldVariantsProps>;
export default SidebarSearchFieldVariants;
/** Mode=Dark, State=Typing */
export declare const SidebarSearchFieldModeDarkStateTyping: React.FC<Partial<SidebarSearchFieldProps>>;
/** Mode=Dark, State=Value */
export declare const SidebarSearchFieldModeDarkStateValue: React.FC<Partial<SidebarSearchFieldProps>>;
/** Mode=Dark, State=Placeholder */
export declare const SidebarSearchFieldModeDarkStatePlaceholder: React.FC<Partial<SidebarSearchFieldProps>>;
/** Mode=Light, State=Typing */
export declare const SidebarSearchFieldModeLightStateTyping: React.FC<Partial<SidebarSearchFieldProps>>;
/** Mode=Light, State=Value */
export declare const SidebarSearchFieldModeLightStateValue: React.FC<Partial<SidebarSearchFieldProps>>;
/** Mode=Light, State=Placeholder */
export declare const SidebarSearchFieldModeLightStatePlaceholder: React.FC<Partial<SidebarSearchFieldProps>>;
