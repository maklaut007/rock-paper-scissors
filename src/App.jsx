/* eslint-disable no-unused-vars */
import React from 'react';
import * as Styled from './AppStyle';
import Header from './components/Header/Header';
import PlayField from './components/PlayField/PlayField';
import AppContext, { contextValue } from './AppContext';

function App() {
  return (
    <AppContext.Provider value={contextValue}>
      <Styled.App>
        <Header />
        <PlayField />
      </Styled.App>
    </AppContext.Provider>
  );
}

export default App;
