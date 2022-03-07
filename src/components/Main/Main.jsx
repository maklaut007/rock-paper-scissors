/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import * as Styled from './MainStyle';
import PlayField from '../PlayField/PlayField';
import Results from '../Results/Results';

function Main() {
  const gameStage = useSelector((state) => state.game.gameStage);

  const renderGame = () => (gameStage === 'initial' ? <PlayField /> : <Results />);

  return (
    <main>
      {renderGame()}
    </main>
  );
}

export default Main;
