import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .post_image {
    width: 100%;
  }
`

export const DetailsContainer = styled.div`
  position: absolute;
  bottom: 0.5em;
  left: 0;
  padding: 0 0.9em;
  min-width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  color: #ffffff;
`

export const LikesContainer = styled.div`
  .like_icon {
    width: 55px;
    filter: invert(67%) sepia(9%) saturate(216%) hue-rotate(202deg) brightness(96%) contrast(86%);

    &.liked_icon {
      filter: invert(51%) sepia(71%) saturate(5598%) hue-rotate(337deg) brightness(96%) contrast(95%);
    }

    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }
  }
`
