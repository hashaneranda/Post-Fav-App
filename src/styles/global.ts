import { createGlobalStyle } from 'styled-components'

import bootstrap from '~/styles/bootstrap'
import { MAIN_BACKGROUND } from '~/styles/modules/variables'
import { theme } from '~/styles/themes'

export default createGlobalStyle`
  ${bootstrap};

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  :root {
    font-size: 14px;

      @media (max-width: 768px) {
        font-size: 12px;
      }
  }

  
  ::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
background-color: #FFF;
}

::-webkit-scrollbar-thumb {
background-color: #CBCBCB;
outline: 2px solid #FFF;
outline-offset: -2px;
border: .1px solid #B7B7B7;
}

::-webkit-scrollbar-thumb:hover{
background-color: #909090;
}

  html {
    font-size: 100%;
  }

  body {
    ${MAIN_BACKGROUND};
    color: ${props => theme(props).colors.text};
    font-family: ${props => theme(props).fonts.body};
  }

  h1,h2,h3,h4,h5, h6 {
    font-family: ${props => theme(props).fonts.heading};
  }

`
