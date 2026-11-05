import * as React from 'react';
import type { SidebarRowProps } from '../../components/sidebar-items/SidebarRow';
export interface SidebarRowVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SidebarRow side by side. */
export declare const SidebarRowVariants: React.FC<SidebarRowVariantsProps>;
export default SidebarRowVariants;
/** State=Disabled, Indent Level=2 */
export declare const SidebarRowStateDisabledIndentLevel2: React.FC<Partial<SidebarRowProps>>;
/** State=Disabled, Indent Level=1 */
export declare const SidebarRowStateDisabledIndentLevel1: React.FC<Partial<SidebarRowProps>>;
/** State=Disabled, Indent Level=0 */
export declare const SidebarRowStateDisabledIndentLevel0: React.FC<Partial<SidebarRowProps>>;
/** State=Selected, Indent Level=2 */
export declare const SidebarRowStateSelectedIndentLevel2: React.FC<Partial<SidebarRowProps>>;
/** State=Disclosable, Indent Level=2 */
export declare const SidebarRowStateDisclosableIndentLevel2: React.FC<Partial<SidebarRowProps>>;
/** State=Selected, Indent Level=1 */
export declare const SidebarRowStateSelectedIndentLevel1: React.FC<Partial<SidebarRowProps>>;
/** State=Disclosable, Indent Level=1 */
export declare const SidebarRowStateDisclosableIndentLevel1: React.FC<Partial<SidebarRowProps>>;
/** State=Selected, Indent Level=0 */
export declare const SidebarRowStateSelectedIndentLevel0: React.FC<Partial<SidebarRowProps>>;
/** State=Disclosable, Indent Level=0 */
export declare const SidebarRowStateDisclosableIndentLevel0: React.FC<Partial<SidebarRowProps>>;
/** State=Default, Indent Level=2 */
export declare const SidebarRowStateDefaultIndentLevel2: React.FC<Partial<SidebarRowProps>>;
/** State=Default, Indent Level=1 */
export declare const SidebarRowStateDefaultIndentLevel1: React.FC<Partial<SidebarRowProps>>;
/** State=Default, Indent Level=0 */
export declare const SidebarRowStateDefaultIndentLevel0: React.FC<Partial<SidebarRowProps>>;
