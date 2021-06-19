import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 614px;
  line-height: 24px;
  overflow: hidden;
  position: relative;

  border: 1px solid ${props => props.theme.colors.gray[300]};

  ${({ theme }) =>
    theme.title === 'dark' &&
    `border: 1px solid ${theme.colors.gray[700]};
     background: ${theme.colors.gray[800]};
  `}

  border-radius: 3px;
`

export const CardBody = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  text-align: center;
`
