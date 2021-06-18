import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  padding: 0 0.9em;
  padding-bottom: 1em;

  h4 {
    color: ${props => props.theme.colors['gray'][400]};
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`
