import styled from 'styled-components'
import { space } from 'styled-system'

export const nav = styled.nav`
  ${space}
  background-color: ${props => props.theme.colors.pink[500]}
`

export const ul = styled.ul`
  display: flex;
  flex-direction: row;
`
export const li = styled.li`
  ${space}
`
