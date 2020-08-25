import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset'

export default createGlobalStyle`
  ${reset}
  
  * {
  box-sizing: border-box;
  }
  body {
  width: 100%;
  }
  a {
  color:#fff;
  text-decoration: none;
  }
`;