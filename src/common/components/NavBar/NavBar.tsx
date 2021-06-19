import React from 'react'

// components
import AppLink from '~/common/components/Typography/AppLink'
import HomeIcon from '~/common/components/Icons/HomeIcon'
import LikeIcon from '~/common/components/Icons/LikeIcon'

import { useThemeValue } from '~/styles/themeContext'
import { THEME_OPTIONS } from '~/styles/themes'

import { Nav, Ul, Li } from './styles'

const AppNav: React.FC = () => {
  const [{ selectedTheme }, dispatch] = useThemeValue()

  const toggleTheme = () => {
    const toggleTheme = selectedTheme === THEME_OPTIONS.DARK ? THEME_OPTIONS.LIGHT : THEME_OPTIONS.DARK

    dispatch({
      type: toggleTheme,
    })
  }

  return (
    <Nav>
      <Ul>
        <Li>
          <AppLink href="/" title="Home" icon={<HomeIcon className="nav_icon" />} />
        </Li>
        <Li>
          <AppLink href="/favorites" title="Favorites" icon={<LikeIcon className="nav_icon" />} />
        </Li>
        <Li className="theme_switcher">
          <h4 onClick={() => toggleTheme()}>Switch Theme</h4>
        </Li>
      </Ul>
    </Nav>
  )
}

export default AppNav
