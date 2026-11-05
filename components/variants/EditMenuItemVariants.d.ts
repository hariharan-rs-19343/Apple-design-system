import * as React from 'react';
import type { EditMenuItemProps } from '../../components/menus/EditMenuItem';
export interface EditMenuItemVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of EditMenuItem side by side. */
export declare const EditMenuItemVariants: React.FC<EditMenuItemVariantsProps>;
export default EditMenuItemVariants;
/** Mode=Light, State=Destructive */
export declare const EditMenuItemModeLightStateDestructive: React.FC<Partial<EditMenuItemProps>>;
/** Mode=Dark, State=Destructive */
export declare const EditMenuItemModeDarkStateDestructive: React.FC<Partial<EditMenuItemProps>>;
/** Mode=Light, State=Default */
export declare const EditMenuItemModeLightStateDefault: React.FC<Partial<EditMenuItemProps>>;
/** Mode=Dark, State=Default */
export declare const EditMenuItemModeDarkStateDefault: React.FC<Partial<EditMenuItemProps>>;
