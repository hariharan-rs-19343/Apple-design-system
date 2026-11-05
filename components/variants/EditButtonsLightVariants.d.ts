import * as React from 'react';
import type { EditButtonsLightProps } from '../../components/lists/EditButtonsLight';
export interface EditButtonsLightVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of EditButtonsLight side by side. */
export declare const EditButtonsLightVariants: React.FC<EditButtonsLightVariantsProps>;
export default EditButtonsLightVariants;
/** State=Remove */
export declare const EditButtonsLightStateRemove: React.FC<Partial<EditButtonsLightProps>>;
/** State=Add */
export declare const EditButtonsLightStateAdd: React.FC<Partial<EditButtonsLightProps>>;
/** State=Selected */
export declare const EditButtonsLightStateSelected: React.FC<Partial<EditButtonsLightProps>>;
/** State=Unselected */
export declare const EditButtonsLightStateUnselected: React.FC<Partial<EditButtonsLightProps>>;
