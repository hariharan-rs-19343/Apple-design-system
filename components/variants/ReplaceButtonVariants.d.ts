import * as React from 'react';
import type { ReplaceButtonProps } from '../../components/accessory-bars/ReplaceButton';
export interface ReplaceButtonVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ReplaceButton side by side. */
export declare const ReplaceButtonVariants: React.FC<ReplaceButtonVariantsProps>;
export default ReplaceButtonVariants;
/** Mode=Light, State=Disabled */
export declare const ReplaceButtonModeLightStateDisabled: React.FC<Partial<ReplaceButtonProps>>;
/** Mode=Dark, State=Disabled */
export declare const ReplaceButtonModeDarkStateDisabled: React.FC<Partial<ReplaceButtonProps>>;
/** Mode=Light, State=Default */
export declare const ReplaceButtonModeLightStateDefault: React.FC<Partial<ReplaceButtonProps>>;
/** Mode=Dark, State=Default */
export declare const ReplaceButtonModeDarkStateDefault: React.FC<Partial<ReplaceButtonProps>>;
