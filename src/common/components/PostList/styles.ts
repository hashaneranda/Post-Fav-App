import styled from 'styled-components'
import { space } from 'styled-system'

export const Section = styled.section`
  ${space}
  padding: 1em 2em;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`

export const ul = styled.ul`
  display: flex;
  flex-direction: row;
`
export const li = styled.li`
  ${space}
`
