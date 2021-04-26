import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Zilla Slab';
  }

  ::-webkit-scrollbar {
    width: 8px;
    background-color: #2e2e2e;
    -webkit-border-radius: 0px;
  }
  ::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.09);
  }
  ::-webkit-scrollbar-thumb:vertical {
    -webkit-border-radius: 0px;
    background: #2e2e2e;
  }
  ::-webkit-scrollbar-thumb:vertical:active {
    -webkit-border-radius: 0px;
    background: #2e2e2e;
  }
  ::-webkit-scrollbar {
    width: 9px;
    background-color: #CCC
  }
  ::-webkit-scrollbar:hover {
    background-color: #CCC;
  }
  ::-webkit-scrollbar-thumb:vertical {
    background: #2e2e2e;
  }

  body {
    padding: 0px;
    margin: 0px;
    width: 100vw;
    overflow-y: auto;
    overflow-x: auto;
    background-color: #000000;
    color: #ffffff;
  }

  .primary-page-title {
    color: #ffde59;
    text-align: center;
  }

  .menu-logo {
    margin: 20px 50px 20px 7%;
  width: 160px;
  height: 70px;
  object-fit: contain;

  @media (max-width: 1250px) {
    margin: 20px 50px 20px 5%;
  }
  }
`

export default GlobalStyle;