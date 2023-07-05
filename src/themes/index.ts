import { cyanTheme } from './cyan-theme';
import { purpleTheme } from './purple-theme';
import { oceanSunriseTheme } from './ocean-sunrise-theme';
import { steampunkTheme } from './steampunk-theme';
import { rainbowTheme } from './rainbow-theme';

type ThemesMap = {
  [key: string]: any;
};

export const themesMap: ThemesMap = {
  cyanTheme: cyanTheme,
  purpleTheme: purpleTheme,
  oceanSunriseTheme: oceanSunriseTheme,
  steampunkTheme: steampunkTheme,
  rainbowTheme: rainbowTheme,
};

export const themesList = Object.keys(themesMap);

export * from './cyan-theme';
export * from './purple-theme';
export * from './ocean-sunrise-theme';
export * from './steampunk-theme';
export * from './rainbow-theme';
