import * as React from 'react';
import type { ActionsProps } from '../../components/views/Actions';
export interface ActionsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Actions side by side. */
export declare const ActionsVariants: React.FC<ActionsVariantsProps>;
export default ActionsVariants;
/** Mode=Dark */
export declare const ActionsModeDark: React.FC<Partial<ActionsProps>>;
/** Mode=Light */
export declare const ActionsModeLight: React.FC<Partial<ActionsProps>>;
