import styled from 'styled-components'
import { space } from 'styled-system'

export const Nav = styled.nav`
  ${space}
  background-color: ${props => props.theme.colors.pink[500]}
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
`
export const Li = styled.li`
  ${space}
`
