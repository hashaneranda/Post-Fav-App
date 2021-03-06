import { AnimatePresence } from 'framer-motion'
import App from 'next/app'

import Theme from '~/styles/theme'
import ThemeSwitcher from '~/styles/themeSwitcher'

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    return (
      <ThemeSwitcher>
        <Theme>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Theme>
      </ThemeSwitcher>
    )
  }
}

export default MyApp
