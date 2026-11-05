import * as React from 'react';
export interface SearchField2Props {
  className?: string;
  style?: React.CSSProperties;
  mode?: "dark" | "light";
  state?: "placeholder" | "typing" | "value";
  searchTerm?: string;
  /** Text content; defaults to "􀊫". */
  text1?: string;
  /** Text content; defaults to "􀊱". */
  text2?: string;
}
export declare const SearchField2: React.FC<SearchField2Props>;
export default SearchField2;
