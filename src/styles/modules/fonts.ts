import { css } from 'styled-components'

import PoppinsRegular from '~/assets/fonts/Poppins/Poppins-Regular.ttf'
import PoppinsBold from '~/assets/fonts/Poppins/Poppins-Bold.ttf'

export default css`
  @font-face {
    font-family: 'Poppins';
    src: local('PoppinsRegular'), local('PoppinsRegular'), url(${PoppinsRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'PoppinsBold';
    src: local('PoppinsBold'), local('PoppinsBold'), url(${PoppinsBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }
`
