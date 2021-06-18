import styled from 'styled-components'
import { space } from 'styled-system'

export const Section = styled.section`
  ${space}
  padding: 1em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  min-width: 100%;
`

export const ul = styled.ul`
  display: flex;
  flex-direction: row;
`
export const li = styled.li`
  ${space}
`
