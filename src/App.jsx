/* eslint-disable no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import * as Styled from './AppStyle';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Styled.App>
        <Header />
        <Main />
      </Styled.App>
    </Provider>
  );
}

export default App;
