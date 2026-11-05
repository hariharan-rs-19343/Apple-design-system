import * as React from 'react';
export interface AppIconOptionsProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: "app store" | "books" | "calendar" | "camera" | "calculator" | "clock" | "compass" | "contacts" | "facetime" | "files" | "find my" | "fitness" | "freeform" | "garage band" | "health" | "home" | "iMovie" | "itunes store" | "keynote" | "mail" | "maps" | "measure" | "messages" | "music" | "news" | "notes" | "number" | "pages" | "phone" | "photos" | "podcasts" | "reminders" | "safari" | "settings" | "shortcuts" | "stocks" | "tips" | "translate" | "tv" | "voice memos" | "wallet" | "watch" | "weather";
  mode?: "light" | "dark" | "tinted";
  /** Text content; defaults to "10". */
  text1?: string;
  /** Text content; defaults to "MON". */
  text2?: string;
}
export declare const AppIconOptions: React.FC<AppIconOptionsProps>;
export default AppIconOptions;
