import * as React from 'react';
import type { ModeLabelProps } from '../../components/labels/ModeLabel';
export interface ModeLabelVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ModeLabel side by side. */
export declare const ModeLabelVariants: React.FC<ModeLabelVariantsProps>;
export default ModeLabelVariants;
/** Mode=Light */
export declare const ModeLabelModeLight: React.FC<Partial<ModeLabelProps>>;
/** Mode=Dark */
export declare const ModeLabelModeDark: React.FC<Partial<ModeLabelProps>>;
