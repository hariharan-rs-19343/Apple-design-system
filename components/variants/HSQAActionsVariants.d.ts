import * as React from 'react';
import type { HSQAActionsProps } from '../../components/home-screen/HSQAActions';
export interface HSQAActionsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of HSQAActions side by side. */
export declare const HSQAActionsVariants: React.FC<HSQAActionsVariantsProps>;
export default HSQAActionsVariants;
/** Mode=Dark, State=Destructive */
export declare const HSQAActionsModeDarkStateDestructive: React.FC<Partial<HSQAActionsProps>>;
/** Mode=Dark, State=Default */
export declare const HSQAActionsModeDarkStateDefault: React.FC<Partial<HSQAActionsProps>>;
/** Mode=Light, State=Destructive */
export declare const HSQAActionsModeLightStateDestructive: React.FC<Partial<HSQAActionsProps>>;
/** Mode=Light, State=Default */
export declare const HSQAActionsModeLightStateDefault: React.FC<Partial<HSQAActionsProps>>;
