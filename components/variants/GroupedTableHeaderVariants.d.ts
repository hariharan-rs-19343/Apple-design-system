import * as React from 'react';
import type { GroupedTableHeaderProps } from '../../components/kit/GroupedTableHeader';
export interface GroupedTableHeaderVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of GroupedTableHeader side by side. */
export declare const GroupedTableHeaderVariants: React.FC<GroupedTableHeaderVariantsProps>;
export default GroupedTableHeaderVariants;
/** Type=Prominent */
export declare const GroupedTableHeaderTypeProminent: React.FC<Partial<GroupedTableHeaderProps>>;
/** Type=Plain */
export declare const GroupedTableHeaderTypePlain: React.FC<Partial<GroupedTableHeaderProps>>;
/** Type=Default */
export declare const GroupedTableHeaderTypeDefault: React.FC<Partial<GroupedTableHeaderProps>>;
