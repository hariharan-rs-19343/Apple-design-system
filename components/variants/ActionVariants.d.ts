import * as React from 'react';
import type { ActionProps } from '../../components/views/Action';
export interface ActionVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Action side by side. */
export declare const ActionVariants: React.FC<ActionVariantsProps>;
export default ActionVariants;
/** Mode=Dark */
export declare const ActionModeDark: React.FC<Partial<ActionProps>>;
/** Mode=Light */
export declare const ActionModeLight: React.FC<Partial<ActionProps>>;
