import * as React from 'react';
import type { NotificationMaterialsProps } from '../../components/notifications/NotificationMaterials';
export interface NotificationMaterialsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of NotificationMaterials side by side. */
export declare const NotificationMaterialsVariants: React.FC<NotificationMaterialsVariantsProps>;
export default NotificationMaterialsVariants;
/** Style=Bottom */
export declare const NotificationMaterialsStyleBottom: React.FC<Partial<NotificationMaterialsProps>>;
/** Style=Middle */
export declare const NotificationMaterialsStyleMiddle: React.FC<Partial<NotificationMaterialsProps>>;
/** Style=Top */
export declare const NotificationMaterialsStyleTop: React.FC<Partial<NotificationMaterialsProps>>;
