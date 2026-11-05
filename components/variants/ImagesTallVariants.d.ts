import * as React from 'react';
import type { ImagesTallProps } from '../../components/lists/ImagesTall';
export interface ImagesTallVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ImagesTall side by side. */
export declare const ImagesTallVariants: React.FC<ImagesTallVariantsProps>;
export default ImagesTallVariants;
/** Type=Symbol */
export declare const ImagesTallTypeSymbol: React.FC<Partial<ImagesTallProps>>;
/** Type=Rounded */
export declare const ImagesTallTypeRounded: React.FC<Partial<ImagesTallProps>>;
/** Type=Circular */
export declare const ImagesTallTypeCircular: React.FC<Partial<ImagesTallProps>>;
/** Type=Fill */
export declare const ImagesTallTypeFill: React.FC<Partial<ImagesTallProps>>;
