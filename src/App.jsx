import Header from "./components/header/Header";
import HomeNavbar from "./components/home-navbar/HomeNavbar";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  section {
    border: 1px solid transparent;
  }
  button, a {
    -webkit-tap-highlight-color: transparent;
  }
  body {
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background-color: #181818;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <HomeNavbar />
      <Header />
    </>
  );
};

export default App;
