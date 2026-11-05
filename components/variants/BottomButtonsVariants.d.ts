import * as React from 'react';
import type { BottomButtonsProps } from '../../components/actions/BottomButtons';
export interface BottomButtonsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of BottomButtons side by side. */
export declare const BottomButtonsVariants: React.FC<BottomButtonsVariantsProps>;
export default BottomButtonsVariants;
/** Mode=Dark, Type=ABC and Mic */
export declare const BottomButtonsModeDarkTypeABCAndMic: React.FC<Partial<BottomButtonsProps>>;
/** Mode=Light, Type=ABC and Mic */
export declare const BottomButtonsModeLightTypeABCAndMic: React.FC<Partial<BottomButtonsProps>>;
/** Type=Emoji and Mic, Mode=Dark */
export declare const BottomButtonsTypeEmojiAndMicModeDark: React.FC<Partial<BottomButtonsProps>>;
/** Type=Emoji and Mic, Mode=Light */
export declare const BottomButtonsTypeEmojiAndMicModeLight: React.FC<Partial<BottomButtonsProps>>;
