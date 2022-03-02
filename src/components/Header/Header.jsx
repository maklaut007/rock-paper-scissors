/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import * as Styled from './HeaderStyle';

function Score() {
  const gameScore = useSelector((state) => state.game.score);
  return (
    <Styled.Score>
      <Styled.Title>
        Rock
        <br />
        Paper
        <br />
        Scissors
      </Styled.Title>
      <Styled.ScoreIcon>
        Score
        <Styled.Number>{gameScore}</Styled.Number>
      </Styled.ScoreIcon>
    </Styled.Score>
  );
}

export default Score;
