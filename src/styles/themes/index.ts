import lightTheme from './light'
import darkTheme from './dark'

interface ThemeOptionsProps {
  light: DefaultTheme
  dark: DefaultTheme
}

interface THEME_OPTIONSProps {
  LIGHT: 'light'
  DARK: 'dark'
}

export const ThemeOptions: ThemeOptionsProps = {
  light: lightTheme,
  dark: darkTheme,
}

export const THEME_OPTIONS: THEME_OPTIONSProps = {
  LIGHT: 'light',
  DARK: 'dark',
}

export const theme = <Props extends { theme: DefaultTheme }>(props: Props) => props.theme
