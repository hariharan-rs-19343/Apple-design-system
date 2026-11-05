import * as React from 'react';
import type { ImagesRegularProps } from '../../components/lists/ImagesRegular';
export interface ImagesRegularVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ImagesRegular side by side. */
export declare const ImagesRegularVariants: React.FC<ImagesRegularVariantsProps>;
export default ImagesRegularVariants;
/** Type=Symbol */
export declare const ImagesRegularTypeSymbol: React.FC<Partial<ImagesRegularProps>>;
/** Type=Rounded */
export declare const ImagesRegularTypeRounded: React.FC<Partial<ImagesRegularProps>>;
/** Type=Circular */
export declare const ImagesRegularTypeCircular: React.FC<Partial<ImagesRegularProps>>;
/** Type=Fill */
export declare const ImagesRegularTypeFill: React.FC<Partial<ImagesRegularProps>>;
