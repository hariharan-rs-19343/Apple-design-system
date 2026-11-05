import * as React from 'react';
export interface AppProps {
  className?: string;
  style?: React.CSSProperties;
  instance?: React.ReactNode;
  appName?: string;
}
export declare const App: React.FC<AppProps>;
export default App;
