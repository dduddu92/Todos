import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
          Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
          'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol', sans-serif !important;
  }
  body{
    position: relative;
    padding-top: 80px;
    background: #e6fcf5;
  }
`;

export default GlobalStyle;
