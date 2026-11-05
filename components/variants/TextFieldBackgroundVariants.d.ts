import * as React from 'react';
import type { TextFieldBackgroundProps } from '../../components/alerts/TextFieldBackground';
export interface TextFieldBackgroundVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of TextFieldBackground side by side. */
export declare const TextFieldBackgroundVariants: React.FC<TextFieldBackgroundVariantsProps>;
export default TextFieldBackgroundVariants;
/** Mode=Dark */
export declare const TextFieldBackgroundModeDark: React.FC<Partial<TextFieldBackgroundProps>>;
/** Mode=Light */
export declare const TextFieldBackgroundModeLight: React.FC<Partial<TextFieldBackgroundProps>>;
