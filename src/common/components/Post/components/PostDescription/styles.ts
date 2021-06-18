import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  padding: 1em 0.9em;
`

export const LikesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6em;
  min-width: 100%;

  .like_icon {
    width: 35px;
    filter: invert(52%) sepia(69%) saturate(3761%) hue-rotate(200deg) brightness(95%) contrast(103%);
  }

  h4 {
    color: ${props => props.theme.colors['blue'][500]};
  }
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
