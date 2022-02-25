import React, { createContext /* useContext */ } from 'react';
import * as Styled from './AppStyle';
import Header from './components/Header/Header';
import PlayField from './components/PlayField/PlayField';
// import Sign from './components/Sign/Sign';

const GameContext = createContext('Unknown');
const game = {
  currentSign: '',
  score: 0,
};
function App() {
  return (
    <GameContext.Provider value={game}>
      <Styled.App>
        <Header />
        <PlayField />
      </Styled.App>
    </GameContext.Provider>
  );
}

export default App;
