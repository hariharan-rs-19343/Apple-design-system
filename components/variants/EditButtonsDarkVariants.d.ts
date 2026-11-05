import * as React from 'react';
import type { EditButtonsDarkProps } from '../../components/actions/EditButtonsDark';
export interface EditButtonsDarkVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of EditButtonsDark side by side. */
export declare const EditButtonsDarkVariants: React.FC<EditButtonsDarkVariantsProps>;
export default EditButtonsDarkVariants;
/** State=Remove */
export declare const EditButtonsDarkStateRemove: React.FC<Partial<EditButtonsDarkProps>>;
/** State=Add */
export declare const EditButtonsDarkStateAdd: React.FC<Partial<EditButtonsDarkProps>>;
/** State=Selected */
export declare const EditButtonsDarkStateSelected: React.FC<Partial<EditButtonsDarkProps>>;
/** State=Unselected */
export declare const EditButtonsDarkStateUnselected: React.FC<Partial<EditButtonsDarkProps>>;
