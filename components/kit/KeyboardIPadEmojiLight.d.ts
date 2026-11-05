import * as React from 'react';
export interface KeyboardIPadEmojiLightProps {
  className?: string;
  style?: React.CSSProperties;
  showBar?: boolean;
  showReplace?: boolean;
  email2?: string;
  email1?: string;
  /** Text content; defaults to "😀\n😃\n😄\n😁\n😆". */
  text1?: string;
  /** Text content; defaults to "🥹\n😅\n😂\n🤣\n🥲". */
  text2?: string;
  /** Text content; defaults to "☺️\n😊\n😇\n🙂\n🙃". */
  text3?: string;
  /** Text content; defaults to "😉\n😌\n😍\n🥰\n😘". */
  text4?: string;
}
export declare const KeyboardIPadEmojiLight: React.FC<KeyboardIPadEmojiLightProps>;
export default KeyboardIPadEmojiLight;
