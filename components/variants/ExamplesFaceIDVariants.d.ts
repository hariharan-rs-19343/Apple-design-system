import * as React from 'react';
import type { ExamplesFaceIDProps } from '../../components/kit/ExamplesFaceID';
export interface ExamplesFaceIDVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ExamplesFaceID side by side. */
export declare const ExamplesFaceIDVariants: React.FC<ExamplesFaceIDVariantsProps>;
export default ExamplesFaceIDVariants;
/** State=Success */
export declare const ExamplesFaceIDStateSuccess: React.FC<Partial<ExamplesFaceIDProps>>;
/** State=Authenticating */
export declare const ExamplesFaceIDStateAuthenticating: React.FC<Partial<ExamplesFaceIDProps>>;
