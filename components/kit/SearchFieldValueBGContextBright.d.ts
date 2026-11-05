import * as React from 'react';
export interface SearchFieldValueBGContextBrightProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "placeholder" | "typing" | "value";
  placeholder?: string;
  /** Text content; defaults to "Label". */
  text1?: string;
}
export declare const SearchFieldValueBGContextBright: React.FC<SearchFieldValueBGContextBrightProps>;
export default SearchFieldValueBGContextBright;
