import { AnimatePresence } from 'framer-motion'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '~/styles/global'
import { light } from '~/styles/themes'

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    return (
      <ThemeProvider theme={light}>
        <GlobalStyle />

        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
    )
  }
}

export default MyApp
