import React from 'react'

// components
import AppLink from '~/common/components/Typography/AppLink'

import * as S from './styles'

const AppNav: React.FC = () => (
  <S.nav p={4}>
    <S.ul>
      <S.li marginRight={2}>
        <AppLink href="/">Home</AppLink>
      </S.li>
      <S.li marginRight={2}>
        <AppLink href="/favorites">Favorites</AppLink>
      </S.li>
    </S.ul>
  </S.nav>
)

export default AppNav
