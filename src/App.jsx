/* eslint-disable no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import * as Styled from './AppStyle';
import Header from './components/Header/Header';
import PlayField from './components/PlayField/PlayField';
import store from './store/store';
import Results from './components/Results/Results';

function App() {
  return (
    <Provider store={store}>
      <Styled.App>
        <Header />
        <PlayField />
        <Results />
      </Styled.App>
    </Provider>
  );
}

export default App;
