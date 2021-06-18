import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  padding: 1em 0.9em;
`
export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-width: 100%;
  gap: 0.8em;

  h5 {
    color: ${props => props.theme.colors['blue'][500]};
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`
