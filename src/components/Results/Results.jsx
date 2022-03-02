import React from 'react';
import { useSelector } from 'react-redux';
import * as Styled from './ResultsStyle';
import Sign from '../Sign/Sign';

function Results() {
  const gameStatus = useSelector((state) => state.game);

  return (
    <Styled.Results>
      <Styled.SignButton><Sign signType={gameStatus.chosenSign} /></Styled.SignButton>
    </Styled.Results>
  );
}

export default Results;
