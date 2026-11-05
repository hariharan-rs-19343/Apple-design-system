import * as React from 'react';
import type { CloseButtonProps } from '../../components/controls/CloseButton';
export interface CloseButtonVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of CloseButton side by side. */
export declare const CloseButtonVariants: React.FC<CloseButtonVariantsProps>;
export default CloseButtonVariants;
/** Mode=Dark Elevated */
export declare const CloseButtonModeDarkElevated: React.FC<Partial<CloseButtonProps>>;
/** Mode=Dark */
export declare const CloseButtonModeDark: React.FC<Partial<CloseButtonProps>>;
/** Mode=Light */
export declare const CloseButtonModeLight: React.FC<Partial<CloseButtonProps>>;
