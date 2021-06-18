import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import { createElement } from 'react'
import styled from 'styled-components'

// components
import NavBar from '~/common/components/NavBar/NavBar'

import { DefaultRouterPageVariants } from '~/common/utils/framer'

interface Props {
  readonly as?: string
  readonly noDefaultTransition?: boolean
}

const PageOuter = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  max-width: 100vw;
  height: 100%;
`

const PageInner = styled(motion.div)`
  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  transform-origin: left center;
  max-width: 100vw;
  margin: 0 auto;
  margin-top: 5em;

  @media screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    margin-top: 0;
    margin-bottom: 5em;
  }
`

const Layout: NextPage<Props> = ({ children, as = 'div', noDefaultTransition = false, ...rest }) =>
  createElement(
    // @ts-ignore
    motion[as],
    {
      exit: 'exit',
      initial: 'exit',
      animate: 'enter',
      className: 'router__wrapper',
    },
    <PageOuter>
      <NavBar />
      <PageInner {...rest} {...(noDefaultTransition ? {} : { variants: DefaultRouterPageVariants })}>
        {children}
      </PageInner>
    </PageOuter>,
  )

export default Layout
