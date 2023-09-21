import {createGlobalStyle} from "styled-components";
import GandhiSansRegular from "./fonts/GandhiSans-Regular.otf";
import GandhiSansBold from "./fonts/GandhiSans-Bold.otf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "GandhiSansRegular";
    src: local("Gandhi Sans Regular"), local("GandhiSansRegular"), url(${GandhiSansRegular});
  }
  @font-face {
    font-family: "GandhiSansBold";
    src: local("Gandhi Sans Bold"), local("GandhiSansBold"), url(${GandhiSansBold});
  }
  
  html {
    font-family: GandhiSansRegular,sans-serif;
  }
`;

export default GlobalStyles