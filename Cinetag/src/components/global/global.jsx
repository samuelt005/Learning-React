import { createGlobalStyle } from 'styled-components';
import MontserratRegular from './fonts/Montserrat-Regular.ttf';
import MontserratMedium from './fonts/Montserrat-Medium.ttf';
import MontserratBold from './fonts/Montserrat-Bold.ttf';
import './global.css';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "MontserratRegular";
    src: local("Montserrat Regular"), local("MontserratRegular"), url(${MontserratRegular});
  }
  @font-face {
    font-family: "MontserratMedium";
    src: local("Montserrat Medium"), local("MontserratMedium"), url(${MontserratMedium});
  }
  @font-face {
    font-family: "MontserratBold";
    src: local("Montserrat Bold"), local("MontserratBold"), url(${MontserratBold});
  }

  html {
    font-family: MontserratRegular, sans-serif;
  }
`;

export default GlobalStyles;
