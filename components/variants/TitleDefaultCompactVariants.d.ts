import * as React from 'react';
import type { TitleDefaultCompactProps } from '../../components/fields/TitleDefaultCompact';
export interface TitleDefaultCompactVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of TitleDefaultCompact side by side. */
export declare const TitleDefaultCompactVariants: React.FC<TitleDefaultCompactVariantsProps>;
export default TitleDefaultCompactVariants;
/** Mode=Light, Title Type=Document */
export declare const TitleDefaultCompactModeLightTitleTypeDocument: React.FC<Partial<TitleDefaultCompactProps>>;
/** Mode=Light, Title Type=Default */
export declare const TitleDefaultCompactModeLightTitleTypeDefault: React.FC<Partial<TitleDefaultCompactProps>>;
/** Mode=Dark, Title Type=Document */
export declare const TitleDefaultCompactModeDarkTitleTypeDocument: React.FC<Partial<TitleDefaultCompactProps>>;
/** Mode=Dark, Title Type=Default */
export declare const TitleDefaultCompactModeDarkTitleTypeDefault: React.FC<Partial<TitleDefaultCompactProps>>;
