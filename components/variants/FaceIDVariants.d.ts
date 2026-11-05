import * as React from 'react';
import type { FaceIDProps } from '../../components/views/FaceID';
export interface FaceIDVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of FaceID side by side. */
export declare const FaceIDVariants: React.FC<FaceIDVariantsProps>;
export default FaceIDVariants;
/** State=Success */
export declare const FaceIDStateSuccess: React.FC<Partial<FaceIDProps>>;
/** State=Authenticating */
export declare const FaceIDStateAuthenticating: React.FC<Partial<FaceIDProps>>;
