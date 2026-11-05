import * as React from 'react';
export interface SearchFieldValueBGContextProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "placeholder" | "typing" | "value";
  placeholder?: string;
  /** Text content; defaults to "Label". */
  text1?: string;
}
export declare const SearchFieldValueBGContext: React.FC<SearchFieldValueBGContextProps>;
export default SearchFieldValueBGContext;
