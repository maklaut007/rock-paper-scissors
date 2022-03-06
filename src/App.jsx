/* eslint-disable no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import * as Styled from './AppStyle';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import store from './store/store';
import Rules from './components/Rules/Rules';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin:0;
    padding:0;
  }
  * {
    border: 0;
    outline: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
    box-sizing: border-box;
  }
  #root{
    height: 100%;
    position: relative;
  }
`;
function App() {
  return (
    <Provider store={store}>
      <Styled.App>
        <Header />
        <Main />
        <GlobalStyle />
        <Rules />
      </Styled.App>
    </Provider>
  );
}

export default App;
