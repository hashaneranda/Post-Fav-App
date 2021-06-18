import React from 'react'

// components
import AppLink from '~/common/components/Typography/AppLink'

import { Nav, Ul, Li } from './styles'

const AppNav: React.FC = () => (
  <Nav p={4}>
    <Ul>
      <Li>
        <AppLink href="/">Home</AppLink>
      </Li>
      <Li>
        <AppLink href="/favorites">Favorites</AppLink>
      </Li>
    </Ul>
  </Nav>
)

export default AppNav
