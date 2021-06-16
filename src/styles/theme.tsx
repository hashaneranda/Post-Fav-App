import { ThemeProvider } from 'styled-components'

import { useThemeValue } from './themeContext'
import GlobalStyle from './global'

interface ThemeProps {
  children: React.ReactNode | React.ReactNode[]
}

const Theme = ({ children }: ThemeProps): JSX.Element => {
  const [{ theme }] = useThemeValue()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Theme
