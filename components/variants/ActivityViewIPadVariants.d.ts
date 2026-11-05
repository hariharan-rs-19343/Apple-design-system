import * as React from 'react';
import type { ActivityViewIPadProps } from '../../components/views/ActivityViewIPad';
export interface ActivityViewIPadVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ActivityViewIPad side by side. */
export declare const ActivityViewIPadVariants: React.FC<ActivityViewIPadVariantsProps>;
export default ActivityViewIPadVariants;
/** Mode=Dark */
export declare const ActivityViewIPadModeDark: React.FC<Partial<ActivityViewIPadProps>>;
/** Mode=Light */
export declare const ActivityViewIPadModeLight: React.FC<Partial<ActivityViewIPadProps>>;
