import styled from 'styled-components'

export const Nav = styled.nav`
  padding: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: ${props => props.theme.colors.background};
  border-bottom: 1px solid #dbdbdb;

  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;

  @media screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    background-color: ${props => props.theme.colors.pink[500]};
    position: fixed;
    bottom: 0;
    top: unset;
    z-index: 2;
    width: 100%;
  }
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 3em;

  @media screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`
export const Li = styled.li`
  font-weight: bold;
`
