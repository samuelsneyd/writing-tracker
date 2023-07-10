import { cyanTheme } from './cyan-theme';
import { greenTheme } from './green-theme';
import { purpleTheme } from './purple-theme';
import { oceanTheme } from './ocean-theme';
import { steampunkTheme } from './steampunk-theme';
import { rainbowTheme } from './rainbow-theme';

type ThemesMap = {
  [key: string]: any;
};

export const themesMap: ThemesMap = {
  cyanTheme,
  greenTheme,
  purpleTheme,
  oceanTheme,
  steampunkTheme,
  rainbowTheme,
};

export const themesList = Object.keys(themesMap);

export * from './cyan-theme';
export * from './green-theme';
export * from './purple-theme';
export * from './ocean-theme';
export * from './steampunk-theme';
export * from './rainbow-theme';
