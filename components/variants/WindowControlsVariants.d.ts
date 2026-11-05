import * as React from 'react';
import type { WindowControlsProps } from '../../components/surfaces/WindowControls';
export interface WindowControlsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WindowControls side by side. */
export declare const WindowControlsVariants: React.FC<WindowControlsVariantsProps>;
export default WindowControlsVariants;
/** State=Inactive */
export declare const WindowControlsStateInactive: React.FC<Partial<WindowControlsProps>>;
/** State=Active */
export declare const WindowControlsStateActive: React.FC<Partial<WindowControlsProps>>;
