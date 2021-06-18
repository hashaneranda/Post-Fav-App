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
