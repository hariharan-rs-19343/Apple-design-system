import * as React from 'react';
export interface EmojiSearchFieldProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "dark" | "light";
  /** Text content; defaults to "Search Emoji". */
  text1?: string;
  /** Text content; defaults to "􀊫". */
  text2?: string;
}
export declare const EmojiSearchField: React.FC<EmojiSearchFieldProps>;
export default EmojiSearchField;
