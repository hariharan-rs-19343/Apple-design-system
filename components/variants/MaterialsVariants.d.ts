import * as React from 'react';
import type { MaterialsProps } from '../../components/materials/Materials';
export interface MaterialsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Materials side by side. */
export declare const MaterialsVariants: React.FC<MaterialsVariantsProps>;
export default MaterialsVariants;
/** Style=Chrome */
export declare const MaterialsStyleChrome: React.FC<Partial<MaterialsProps>>;
/** Style=Thick */
export declare const MaterialsStyleThick: React.FC<Partial<MaterialsProps>>;
/** Style=Regular */
export declare const MaterialsStyleRegular: React.FC<Partial<MaterialsProps>>;
/** Style=Thin */
export declare const MaterialsStyleThin: React.FC<Partial<MaterialsProps>>;
/** Style=Ultrathin */
export declare const MaterialsStyleUltrathin: React.FC<Partial<MaterialsProps>>;
