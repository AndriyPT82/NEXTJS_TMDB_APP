import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: #fff;
  }

  html {
    scroll-behavior: smooth
  }

  body {
    display: flex;
    min-height: 100vh;
    background-color: #0D0C0F;
    font-family: 'Inter', sans-serif;
  }

  #__next {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  main {
    flex-grow: 1;
  }

  a {
    color: inherit;
    text-decoration: none;
    width: max-content
  }

  ul, li {
    list-style: none; 
    /* padding: 0; 
    margin: 0;  */
  }

  button {
    all: unset;
    outline: revert;
  }

  ::-webkit-scrollbar {
    /* Тонка ширина скролу */
    height: 6px; 
  }

  ::-webkit-scrollbar-thumb {
    /* Колір скролу */
    background: #888; 
  }

  /* Стилізація вертикального скролу */
  ::-webkit-scrollbar {
   /* Тонка ширина скролу */
    width: 6px; 
    background: #88888875; 


  }

  ::-webkit-scrollbar-thumb {
    /* Колір скролу */
    background: #888; 
  }




`;

export const SectionTitle = styled.h2`
  font-size: 60px;
  margin-bottom: 70px;
  margin-bottom: 40px;
`;

export const Container = styled.div`
  margin: auto;
  padding: 0 30px;
  max-width: 1280px;
  width: 100%;
`;

export default GlobalStyle;
