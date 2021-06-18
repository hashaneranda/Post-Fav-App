import React from 'react'

// components
import AppLink from '~/common/components/Typography/AppLink'
import HomeIcon from '~/common/components/Icons/HomeIcon'
import LikeIcon from '~/common/components/Icons/LikeIcon'

import { Nav, Ul, Li } from './styles'

const AppNav: React.FC = () => (
  <Nav>
    <Ul>
      <Li>
        <AppLink href="/" title="Home" icon={<HomeIcon className="nav_icon" />} />
      </Li>
      <Li>
        <AppLink href="/favorites" title="Favorites" icon={<LikeIcon className="nav_icon" />} />
      </Li>
    </Ul>
  </Nav>
)

export default AppNav
