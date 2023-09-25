import { createGlobalStyle } from 'styled-components';
import RalewayRegular from './fonts/Raleway-Regular.ttf';
import PlayfairDisplayRegular from './fonts/PlayfairDisplay-Regular.ttf';
import PlayfairDisplaySemiBold from './fonts/PlayfairDisplay-SemiBold.ttf';
import PlayfairDisplayBold from './fonts/PlayfairDisplay-Bold.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "PlayfairDisplayRegular";
    src: local("Playfair Display Regular"), local("PlayfairDisplayRegular"), url(${PlayfairDisplayRegular});
  }

  @font-face {
    font-family: "PlayfairDisplaySemiBold";
    src: local("Playfair Display SemiBold"), local("PlayfairDisplaySemiBold"), url(${PlayfairDisplaySemiBold});
  }

  @font-face {
    font-family: "PlayfairDisplayBold";
    src: local("Playfair Display Bold"), local("PlayfairDisplayBold"), url(${PlayfairDisplayBold});
  }

  @font-face {
    font-family: "RalewayRegular";
    src: local("Raleway Regular"), local("RalewayRegular"), url(${RalewayRegular});
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --dark-blue: #041833;
    --medium-blue: #1875E8;
    --primary-font-color: #041833;
    --fonte-post-color: #444444;
    --white: #FFFFFF;
    --primary-font: RalewayRegular, sans-serif;
    --secondary-font-regular: PlayfairDisplayRegular, sans-serif;
    --secondary-font-semibold: PlayfairDisplaySemiBold, sans-serif;
    --secondary-font-bold: PlayfairDisplayBold, sans-serif;

    font-family: var(--primary-font);
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  a, button, input, textarea {
    font: inherit;
    color: inherit;
  }

  button {
    background-color: transparent;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  h1, h2, h3 {
    font-weight: 700;
    line-height: 5rem;
  }
`;

export default GlobalStyles;
